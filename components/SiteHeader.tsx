import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/services/vinyl-wrap", label: "Vinyl Wrap" },
  { href: "/services/ppf", label: "PPF" },
  { href: "/services/ceramic-coating", label: "Ceramic" },
  { href: "/services/window-tint", label: "Window Tint" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-800/80 bg-ink-950/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
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
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
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
          <Link href="/contact" className="btn-primary !px-5 !py-2 text-xs">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
