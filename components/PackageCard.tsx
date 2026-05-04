import Link from "next/link";

export default function PackageCard({
  name,
  priceLabel,
  includes,
  bestFor,
  featured,
}: {
  name: string;
  priceLabel: string;
  includes: readonly string[];
  bestFor?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-6 backdrop-blur ${
        featured
          ? "border-accent/60 bg-gradient-to-br from-ink-900 via-ink-900 to-accent/10 shadow-[0_30px_80px_-30px_rgba(225,29,42,0.5)]"
          : "border-ink-700 bg-ink-900/60"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
          Most popular
        </span>
      )}
      <h3 className="font-display text-xl font-semibold text-white">{name}</h3>
      <p className="mt-2 font-display text-3xl font-semibold text-accent">{priceLabel}</p>
      {bestFor && <p className="mt-1 text-xs text-chrome">Best for: {bestFor}</p>}
      <ul className="mt-6 flex-1 space-y-3 text-sm text-chrome">
        {includes.map((i) => (
          <li key={i} className="flex gap-3">
            <svg width="16" height="16" viewBox="0 0 18 18" className="mt-0.5 shrink-0 text-accent" fill="none" aria-hidden>
              <path d="M3 9l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{i}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`mt-6 ${featured ? "btn-primary" : "btn-ghost"}`}>
        Request this build
      </Link>
    </div>
  );
}
