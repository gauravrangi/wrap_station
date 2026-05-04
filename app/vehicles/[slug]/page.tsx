import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { vehicles } from "@/lib/vehicles";
import { services, site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const v = vehicles.find((x) => x.slug === params.slug);
  if (!v) return {};
  return {
    title: `${v.name} Wrap, PPF & Ceramic in San Diego`,
    description: v.intro,
    alternates: { canonical: `/vehicles/${v.slug}` },
    keywords: [...v.keywords, "San Diego", "Wrap Station"],
  };
}

export default function VehiclePage({ params }: { params: { slug: string } }) {
  const v = vehicles.find((x) => x.slug === params.slug);
  if (!v) notFound();

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-800">
        <div className="absolute inset-0 bg-radial-spot" aria-hidden />
        <div className="container-x relative py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-chrome">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2 text-ink-600">/</span>
            <Link href="/vehicles" className="hover:text-white">Vehicles</Link>
            <span className="mx-2 text-ink-600">/</span>
            <span className="text-white">{v.name}</span>
          </nav>
          <p className="eyebrow mt-6">Studio specialty</p>
          <h1 className="heading mt-3">{v.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-chrome">{v.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get a quote for my {v.name}</Link>
            <a href={`tel:${site.phone}`} className="btn-ghost">{site.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Most popular"
              title={`What ${v.name} owners book.`}
            />
            <ul className="mt-8 space-y-4">
              {v.popularServices.map((p) => (
                <li key={p} className="card flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    ✓
                  </span>
                  <span className="text-sm text-chrome">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="card">
            <p className="eyebrow">Installer note</p>
            <p className="mt-3 text-sm leading-relaxed text-chrome">{v.note}</p>
            <Link href="/contact" className="btn-primary mt-6 w-full">Start my quote</Link>
          </aside>
        </div>
      </section>

      <section className="border-y border-ink-800 bg-ink-900/40">
        <div className="container-x py-20">
          <SectionHeading
            eyebrow="All services"
            title="Available for every build."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading eyebrow="Other vehicles" title="Browse other platforms we specialize in." />
        <div className="mt-8 flex flex-wrap gap-2">
          {vehicles.filter((x) => x.slug !== v.slug).map((o) => (
            <Link
              key={o.slug}
              href={`/vehicles/${o.slug}`}
              className="rounded-full border border-ink-700 px-4 py-2 text-sm text-chrome hover:border-accent hover:text-white"
            >
              {o.name}
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: site.url },
              { name: "Vehicles", url: `${site.url}/vehicles` },
              { name: v.name, url: `${site.url}/vehicles/${v.slug}` },
            ])
          ),
        }}
      />
    </>
  );
}
