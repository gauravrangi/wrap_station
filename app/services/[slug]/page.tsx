import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, site } from "@/lib/site";
import { faqsByService } from "@/lib/faqs";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  const title = `${s.title} in San Diego — ${s.priceLabel}`;
  return {
    title,
    description: `${s.intro} Installed at our Sorrento Mesa studio. ${s.priceLabel} typical.`,
    keywords: [...s.keywords, "San Diego", "Sorrento Mesa", "Tesla", "BMW", "Mercedes"],
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: `${s.title} | ${site.name}`,
      description: s.intro,
      url: `${site.url}/services/${s.slug}`,
      type: "article",
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const faqs = faqsByService[s.slug] ?? [];
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-800">
        <div className="absolute inset-0 bg-radial-spot" aria-hidden />
        <div className="container-x relative grid gap-10 py-20 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <nav aria-label="Breadcrumb" className="text-xs text-chrome">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2 text-ink-600">/</span>
              <span className="text-white">{s.title}</span>
            </nav>
            <p className="eyebrow mt-6">Service • San Diego</p>
            <h1 className="heading mt-3">{s.title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-chrome">{s.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">Get my quote</Link>
              <a href={`tel:${site.phone}`} className="btn-ghost">
                {site.phoneDisplay}
              </a>
              <span className="text-sm text-chrome">
                Typical investment: <span className="font-semibold text-white">{s.priceLabel}</span>
              </span>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="card">
              <h2 className="font-display text-lg font-semibold text-white">What's included</h2>
              <ul className="mt-4 space-y-3 text-sm text-chrome">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <svg width="18" height="18" viewBox="0 0 18 18" className="mt-0.5 shrink-0 text-accent" fill="none" aria-hidden>
                      <path d="M3 9l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="container-x py-20">
          <SectionHeading
            eyebrow="FAQ"
            title={`${s.title} questions, answered.`}
            intro="Don't see your question? Text or call the studio — we love this stuff."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <details key={f.q} className="card group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-white">{f.q}</span>
                  <span className="text-accent transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-chrome">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-ink-800 bg-ink-900/40">
        <div className="container-x py-20">
          <SectionHeading eyebrow="Explore more" title="Other services at the studio" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {others.map((o) => <ServiceCard key={o.slug} s={o} />)}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd(s.slug)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: site.url },
              { name: s.title, url: `${site.url}/services/${s.slug}` },
            ])
          ),
        }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
      )}
    </>
  );
}
