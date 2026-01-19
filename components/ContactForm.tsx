"use client";

import { useState } from "react";

type ContactState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<ContactState>({ status: "idle" });

  return (
    <form
      className="mt-6 grid gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setState({ status: "sending" });

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
        };

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          const data = (await res.json()) as { ok: boolean; message: string };

          if (!res.ok || !data.ok) {
            setState({
              status: "error",
              message: data.message || "Something went wrong.",
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
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input
            name="name"
            required
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-base outline-none ring-black/20 focus:ring-2 dark:border-white/20 dark:bg-black/20"
            placeholder="Kent Hinayon"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            required
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-base outline-none ring-black/20 focus:ring-2 dark:border-white/20 dark:bg-black/20"
            placeholder="kent@email.com"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-xl border border-black/15 bg-white px-4 py-3 text-base outline-none ring-black/20 focus:ring-2 dark:border-white/20 dark:bg-black/20"
          placeholder="Tell me what you’d like to build…"
        />
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

      <p className="text-xs text-black/60 dark:text-white/60">
        This form currently validates and confirms submission. To deliver emails,
        connect an email provider later (e.g., Resend) in the API route.
      </p>
    </form>
  );
}
