"use client";

import { useState } from "react";

export default function Newsletter() {
  const [state, setState] = useState<"idle" | "ok">("idle");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setState("ok");
      }}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@email.com"
        className="flex-1 rounded-full border border-ink-700 bg-ink-900 px-5 py-3 text-sm text-white placeholder:text-ink-600 focus:border-accent focus:outline-none"
      />
      <button type="submit" className="btn-primary !px-5">
        {state === "ok" ? "Subscribed ✓" : "Subscribe"}
      </button>
    </form>
  );
}
