import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "../../../lib/contact";

export const runtime = "nodejs";

type RateState = { count: number; resetAt: number };

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitByIp = new Map<string, RateState>();

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = rateLimitByIp.get(ip);

  if (!current || now > current.resetAt) {
    rateLimitByIp.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true } as const;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfterSeconds: Math.ceil((current.resetAt - now) / 1000) } as const;
  }

  current.count += 1;
  return { allowed: true } as const;
}

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

let cachedTransporter: nodemailer.Transporter | null = null;
function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const host = requireEnv("SMTP_HOST");
  const port = Number(requireEnv("SMTP_PORT"));
  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  return cachedTransporter;
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const rate = checkRateLimit(ip);
  if (!rate.allowed) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again soon." },
      {
        status: 429,
        headers: { "Retry-After": String(rate.retryAfterSeconds) },
      },
    );
  }

  const json = (await req.json().catch(() => null)) as unknown;
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message || "Invalid form data.";
    return NextResponse.json({ ok: false, message }, { status: 400 });
  }

  // Honeypot: silently accept but do not send email.
  if ((parsed.data.company ?? "").trim().length > 0) {
    return NextResponse.json({ ok: true, message: "Thanks! Your message was received." });
  }

  try {
    const to = process.env.CONTACT_TO_EMAIL || requireEnv("SMTP_USER");
    const fromEmail = process.env.CONTACT_FROM_EMAIL || requireEnv("SMTP_USER");

    const { name, email, subject, message } = parsed.data;

    const transporter = getTransporter();

    // Verify connection in dev; in production this can add latency, so only do it when explicitly enabled.
    if (process.env.SMTP_VERIFY === "true") {
      await transporter.verify();
    }

    const safeSubject = subject.replace(/[\r\n]+/g, " ").slice(0, 120);

    await transporter.sendMail({
      to,
      from: `Portfolio Contact <${fromEmail}>`,
      replyTo: email,
      subject: `[Portfolio] ${safeSubject}`,
      text: `New message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${safeSubject}\n\nMessage:\n${message}\n`,
      html: `
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;line-height:1.5">
          <h2 style="margin:0 0 12px">New portfolio message</h2>
          <p style="margin:0 0 8px"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 8px"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin:0 0 16px"><strong>Subject:</strong> ${escapeHtml(safeSubject)}</p>
          <p style="margin:0 0 6px"><strong>Message:</strong></p>
          <pre style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:8px">${escapeHtml(message)}</pre>
        </div>
      `.trim(),
    });

    const autoReplyEnabled = process.env.CONTACT_AUTOREPLY_ENABLED
      ? process.env.CONTACT_AUTOREPLY_ENABLED === "true"
      : true;

    if (autoReplyEnabled) {
      const vars = {
        name,
        email,
        subject: safeSubject,
        message,
      };

      const autoReplySubjectTemplate =
        process.env.CONTACT_AUTOREPLY_SUBJECT || "Thanks for reaching out, {name}!";
      const autoReplyTextTemplate = process.env.CONTACT_AUTOREPLY_TEXT ||
        [
          "Hi {name},",
          "",
          "Thanks for messaging me — I really appreciate it.",
          "I received your message about: {subject}",
          "",
          "I’ll get back to you as soon as I can.",
          "",
          "Best regards,",
          "Kent",
          "",
          "(This is an automatic reply.)",
        ].join("\n");

      const autoReplySubject = applyTemplate(autoReplySubjectTemplate, vars)
        .replace(/[\r\n]+/g, " ")
        .slice(0, 120);
      const autoReplyText = applyTemplate(autoReplyTextTemplate, vars).slice(0, 5000);

      const autoReplyHtmlTemplate = process.env.CONTACT_AUTOREPLY_HTML;
      const autoReplyHtml = autoReplyHtmlTemplate
        ? applyTemplate(autoReplyHtmlTemplate, vars)
        : `
            <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;line-height:1.6">
              <p style="margin:0 0 12px">${escapeHtml(autoReplyText).replaceAll("\n", "<br />")}</p>
            </div>
          `.trim();

      // Don’t fail the request if the auto-reply fails; the main delivery (to you) already succeeded.
      transporter.sendMail({
        to: email,
        from: `Portfolio Contact <${fromEmail}>`,
        replyTo: to,
        subject: autoReplySubject,
        text: autoReplyText,
        html: autoReplyHtml,
      }).catch(() => {
        // Intentionally swallow; avoids leaking provider info to the client.
      });
    }

    return NextResponse.json({ ok: true, message: "Thanks! Your message was sent." });
  } catch (err) {
    const message = getSafeErrorMessage(err);
    return NextResponse.json(
      { ok: false, message },
      { status: 500 },
    );
  }
}

function applyTemplate(template: string, vars: Record<string, string>) {
  // Minimal placeholder replacement for env-configurable templates.
  // Supports {name}, {email}, {subject}, {message}
  return template.replace(/\{(name|email|subject|message)\}/g, (_, key: string) => vars[key] ?? "");
}

function getSafeErrorMessage(err: unknown) {
  if (err instanceof Error) {
    if (err.message.startsWith("Missing env var:")) {
      if (process.env.NODE_ENV === "production") {
        return "Email is not configured on the server. Please set the SMTP environment variables.";
      }
      return `${err.message}. Set it in .env.local (local) or in your hosting provider env vars (production).`;
    }

    // Avoid leaking provider details in production.
    if (process.env.NODE_ENV === "production") {
      return "Email service error. Please try again later.";
    }
    return err.message;
  }

  return process.env.NODE_ENV === "production"
    ? "Email service error. Please try again later."
    : String(err);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
