"use client";

import Link from "next/link";
import { useState } from "react";
import { services, site } from "@/lib/site";

const primary = [
  { href: "/services", label: "Services" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/locations", label: "Service Areas" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-800/80 bg-ink-950/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-md bg-accent font-display text-sm font-bold"
          >
            WS
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Wrap <span className="text-accent">Station</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          <div className="group relative">
            <Link
              href="/services"
              className="text-sm font-medium text-chrome transition hover:text-white"
            >
              Services
            </Link>
            <div className="invisible absolute left-1/2 top-full mt-2 w-72 -translate-x-1/2 rounded-xl border border-ink-700 bg-ink-900 p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-chrome hover:bg-ink-800 hover:text-white"
                >
                  <span>{s.title}</span>
                  <span className="text-xs text-accent">{s.priceLabel}</span>
                </Link>
              ))}
            </div>
          </div>
          {primary.slice(1).map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-chrome transition hover:text-white"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phone}`}
            className="hidden text-sm font-semibold text-chrome hover:text-white sm:block"
          >
            {site.phoneDisplay}
          </a>
          <Link href="/book" className="hidden btn-primary !px-5 !py-2 text-xs sm:inline-flex">
            Book a Visit
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-ink-700 text-white lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-800 bg-ink-950 lg:hidden">
          <nav className="container-x grid gap-1 py-4" aria-label="Mobile">
            {primary.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-chrome hover:bg-ink-800 hover:text-white"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-white"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
