"use client";

import { useState } from "react";
import { contactSchema, type ContactPayload } from "../lib/contact";

type ContactState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

export function ContactForm() {
  const [state, setState] = useState<ContactState>({ status: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});

  return (
    <form
      className="mt-6 grid gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setErrors({});
        setState({ status: "sending" });

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload: ContactPayload = {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          subject: String(formData.get("subject") ?? ""),
          message: String(formData.get("message") ?? ""),
          company: String(formData.get("company") ?? ""),
        };

        const parsed = contactSchema.safeParse(payload);
        if (!parsed.success) {
          const nextErrors: FieldErrors = {};
          for (const issue of parsed.error.issues) {
            const key = issue.path[0] as keyof ContactPayload | undefined;
            if (key && !nextErrors[key]) nextErrors[key] = issue.message;
          }
          setErrors(nextErrors);
          setState({ status: "idle" });
          return;
        }

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(parsed.data),
          });

          let data: { ok: boolean; message: string } | null = null;
          try {
            data = (await res.json()) as { ok: boolean; message: string };
          } catch {
            data = null;
          }

          if (!res.ok || !data?.ok) {
            setState({
              status: "error",
              message: data?.message || `Something went wrong (HTTP ${res.status}).`,
            });
            return;
          }

          form.reset();
          setState({ status: "success", message: data.message });
        } catch {
          setState({
            status: "error",
            message: "Network error. Please try again.",
          });
        }
      }}
    >
      {/* Honeypot field (hidden). Bots often fill this in. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-base outline-none ring-black/20 focus:ring-2 dark:border-white/20 dark:bg-black/20"
            placeholder="Kent Hinayon"
          />
          {errors.name ? (
            <span id="contact-name-error" className="text-xs text-red-700 dark:text-red-300">
              {errors.name}
            </span>
          ) : null}
        </label>

        <label className="grid gap-2 text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-base outline-none ring-black/20 focus:ring-2 dark:border-white/20 dark:bg-black/20"
            placeholder="kent@email.com"
          />
          {errors.email ? (
            <span id="contact-email-error" className="text-xs text-red-700 dark:text-red-300">
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium">
        Subject
        <input
          name="subject"
          required
          autoComplete="off"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          className="h-11 rounded-xl border border-black/15 bg-white px-4 text-base outline-none ring-black/20 focus:ring-2 dark:border-white/20 dark:bg-black/20"
          placeholder="Project inquiry"
        />
        {errors.subject ? (
          <span id="contact-subject-error" className="text-xs text-red-700 dark:text-red-300">
            {errors.subject}
          </span>
        ) : null}
      </label>

      <label className="grid gap-2 text-sm font-medium">
        Message
        <textarea
          name="message"
          required
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="rounded-xl border border-black/15 bg-white px-4 py-3 text-base outline-none ring-black/20 focus:ring-2 dark:border-white/20 dark:bg-black/20"
          placeholder="Tell me what you’d like to build…"
        />
        {errors.message ? (
          <span id="contact-message-error" className="text-xs text-red-700 dark:text-red-300">
            {errors.message}
          </span>
        ) : null}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state.status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/85 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-white/85"
        >
          {state.status === "sending" ? "Sending…" : "Send Message"}
        </button>

        <div aria-live="polite" className="text-sm">
          {state.status === "success" ? (
            <p className="text-emerald-700 dark:text-emerald-300">
              {state.message}
            </p>
          ) : null}
          {state.status === "error" ? (
            <p className="text-red-700 dark:text-red-300">{state.message}</p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
