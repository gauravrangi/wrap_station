"use client";

import { useState } from "react";
import { services, site } from "@/lib/site";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("website") as string)?.trim()) {
      // honeypot — pretend success
      setSubmitted(true);
      return;
    }

    const subject = `Wrap Station quote — ${data.get("service")} for ${data.get("vehicle")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Vehicle: ${data.get("vehicle")}`,
      `Service: ${data.get("service")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
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
      <div className="sm:col-span-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-chrome">
          We typically respond within one business day.
        </p>
        <button type="submit" className="btn-primary">
          {submitted ? "Email opened ✓" : "Request my quote"}
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
