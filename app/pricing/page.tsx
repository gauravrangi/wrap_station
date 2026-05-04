import type { Metadata } from "next";
import Link from "next/link";
import { packages } from "@/lib/packages";
import { services, site } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";

export const metadata: Metadata = {
  title: "Pricing & Packages — Vinyl Wrap, PPF, Ceramic & Tint",
  description:
    "Transparent pricing for vinyl wraps, paint protection film, ceramic coating and window tint at Wrap Station's San Diego studio.",
  alternates: { canonical: "/pricing" },
};

const groups = [
  { key: "vinyl-wrap" as const, title: "Vinyl Wrap" },
  { key: "ppf" as const, title: "Paint Protection Film (PPF)" },
  { key: "ceramic-coating" as const, title: "Ceramic Coating" },
  { key: "window-tint" as const, title: "Window Tint" },
];

export default function PricingPage() {
  return (
    <>
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Pricing"
          title="Honest packages, no surprise add-ons."
          intro="Pricing varies with vehicle size, material selection and coverage. The packages below are starting points — we'll always quote your exact build before any work begins."
        />
        <div className="mt-8 flex flex-wrap gap-2 text-sm">
          {groups.map((g) => (
            <a
              key={g.key}
              href={`#${g.key}`}
              className="rounded-full border border-ink-700 px-4 py-2 text-chrome hover:border-accent hover:text-white"
            >
              {g.title}
            </a>
          ))}
        </div>
      </section>

      {groups.map((g) => {
        const list = packages[g.key];
        const linked = services.find((s) => s.slug === g.key);
        return (
          <section
            key={g.key}
            id={g.key}
            className="border-t border-ink-800 bg-ink-900/30 py-20"
          >
            <div className="container-x">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <SectionHeading eyebrow={g.title} title={`${g.title} packages`} />
                {linked && (
                  <Link
                    href={`/services/${linked.slug}`}
                    className="text-sm font-semibold text-accent hover:text-white"
                  >
                    Learn more about {linked.title} →
                  </Link>
                )}
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {list.map((p) => (
                  <PackageCard
                    key={p.name}
                    name={p.name}
                    priceLabel={p.priceLabel}
                    includes={p.includes}
                    bestFor={p.bestFor}
                    featured={"featured" in p && p.featured === true}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="container-x py-20">
        <div className="rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-900 to-accent/10 p-10 sm:p-14">
          <p className="eyebrow">Bundle discounts</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Combining services? You save.
          </h2>
          <p className="mt-4 max-w-2xl text-chrome">
            Most clients combine wrap + ceramic, or PPF + tint, or all four. Bundled
            packages typically save 10–15% vs. booking each service separately. Ask
            about it at quote time.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Build my package</Link>
            <a href={`tel:${site.phone}`} className="btn-ghost">{site.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </>
  );
}
