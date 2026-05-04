"use client";

import { useState } from "react";
import { services } from "@/lib/site";

type State = "idle" | "submitting" | "ok" | "error";

export default function QuoteForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setState("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Could not send");
      }
      setState("ok");
      form.reset();
    } catch (err: unknown) {
      setState("error");
      setError(err instanceof Error ? err.message : "Could not send");
    }
  }

  if (state === "ok") {
    return (
      <div className="rounded-xl border border-accent/40 bg-accent/10 p-6 text-sm text-white">
        <p className="font-display text-lg font-semibold">Got it — talk soon.</p>
        <p className="mt-2 text-chrome">
          We've received your request and will reply within one business day. If
          you need an answer faster, give the studio a call.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-4 text-xs uppercase tracking-widest text-accent hover:text-white"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />
      <Field label="Your name" name="name" required />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
      <Field label="Year, Make & Model" name="vehicle" placeholder="2024 Tesla Model Y" required />
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-chrome">
          Service
        </label>
        <select
          name="service"
          required
          className="mt-2 w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>Choose a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Multiple / Not sure">Multiple / Not sure</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-chrome">
          Project details
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Color preference, coverage, timeline, etc."
          className="mt-2 w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
        />
      </div>
      {state === "error" && error && (
        <p className="sm:col-span-2 rounded-md border border-accent/40 bg-accent/10 p-3 text-xs text-white">
          {error}. Try again or call the studio directly.
        </p>
      )}
      <div className="sm:col-span-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-chrome">
          We typically respond within one business day.
        </p>
        <button type="submit" disabled={state === "submitting"} className="btn-primary disabled:opacity-60">
          {state === "submitting" ? "Sending…" : "Request my quote"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-wider text-chrome">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-ink-600 focus:border-accent focus:outline-none"
      />
    </div>
  );
}
