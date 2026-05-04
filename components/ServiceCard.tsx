import Link from "next/link";
import type { Service } from "@/lib/site";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      href={`/services/${s.slug}`}
      className="card group flex flex-col justify-between hover:-translate-y-1"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {s.priceLabel}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-white">
          {s.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-chrome">{s.short}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
        Learn more
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition group-hover:translate-x-0.5"
          />
        </svg>
      </span>
    </Link>
  );
}
