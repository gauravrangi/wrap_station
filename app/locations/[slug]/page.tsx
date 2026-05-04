import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations } from "@/lib/locations";
import { services, site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const l = locations.find((x) => x.slug === params.slug);
  if (!l) return {};
  return {
    title: `Vinyl Wrap, PPF, Ceramic & Tint in ${l.name}, CA`,
    description: `${l.intro} Just ${l.drive} from our Sorrento Mesa studio.`,
    alternates: { canonical: `/locations/${l.slug}` },
    keywords: [...l.keywords, l.name, "San Diego"],
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const l = locations.find((x) => x.slug === params.slug);
  if (!l) notFound();

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-800">
        <div className="absolute inset-0 bg-radial-spot" aria-hidden />
        <div className="container-x relative py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-chrome">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2 text-ink-600">/</span>
            <Link href="/locations" className="hover:text-white">Service Areas</Link>
            <span className="mx-2 text-ink-600">/</span>
            <span className="text-white">{l.name}</span>
          </nav>
          <p className="eyebrow mt-6">{l.drive} from our Sorrento Mesa studio</p>
          <h1 className="heading mt-3">
            Vinyl wrap, PPF & ceramic for <span className="text-accent">{l.name}</span> drivers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-chrome">{l.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Book your install</Link>
            <a href={`tel:${site.phone}`} className="btn-ghost">{site.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Services available in"
          title={`What we install for ${l.name} clients.`}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
        </div>
      </section>

      <section className="border-y border-ink-800 bg-ink-900/40">
        <div className="container-x py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Familiar with the area?</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                We see {l.name} cars every week.
              </h2>
              <p className="mt-4 text-chrome">
                From {l.landmarks.slice(0, 2).join(" and ")} to{" "}
                {l.landmarks.slice(-1)[0]}, we know the streets, the parking and
                the way the sun hits your car at 4 PM. We build wraps and PPF
                packages with all of it in mind.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-chrome">
                {l.landmarks.map((p) => (
                  <li key={p} className="rounded-lg border border-ink-700 px-3 py-2">{p}</li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-ink-700">
              <iframe
                title={`Map of ${l.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${l.name}, CA`)}&output=embed`}
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Other areas"
          title="We also serve…"
          intro="Drive over from anywhere in San Diego County — most clients book a single visit and pick up a few days later."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {locations.filter((x) => x.slug !== l.slug).map((o) => (
            <Link
              key={o.slug}
              href={`/locations/${o.slug}`}
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
              { name: "Service Areas", url: `${site.url}/locations` },
              { name: l.name, url: `${site.url}/locations/${l.slug}` },
            ])
          ),
        }}
      />
    </>
  );
}
