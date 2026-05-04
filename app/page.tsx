import Link from "next/link";
import type { Metadata } from "next";
import { site, services } from "@/lib/site";
import { testimonials, aggregateRating } from "@/lib/testimonials";
import { posts } from "@/lib/posts";
import { vehicles } from "@/lib/vehicles";
import { materials } from "@/lib/materials";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";
import Stars from "@/components/Stars";

export const metadata: Metadata = {
  title: `Vinyl Wrap, PPF, Ceramic Coating & Window Tint | San Diego`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredPosts = [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-800 bg-ink-950">
        <div className="absolute inset-0 bg-radial-spot" aria-hidden />
        <div className="absolute inset-0 bg-carbon opacity-40" aria-hidden />
        <div className="container-x relative grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <p className="eyebrow">San Diego • Sorrento Mesa</p>
            <h1 className="heading mt-4">
              Premium <span className="text-accent">vinyl wraps</span>,
              PPF & ceramic for the cars you love.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-chrome">
              Wrap Station is San Diego's go-to studio for Tesla, BMW and
              Mercedes owners. Color-change wraps, paint protection film,
              ceramic coatings and precision window tint — installed by
              certified pros.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">Get a free quote</Link>
              <a href={`tel:${site.phone}`} className="btn-ghost">
                Call {site.phoneDisplay}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-chrome">
              <Stars rating={5} />
              <span>
                <strong className="text-white">{aggregateRating.value.toFixed(1)} / 5</strong>{" "}
                from {aggregateRating.count}+ verified clients
              </span>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-ink-800 pt-8 text-sm">
              <Stat k="500+" v="Vehicles transformed" />
              <Stat k="7-yr" v="Wrap warranty" />
              <Stat k="5.0★" v="Google & Instagram" />
            </dl>
          </div>
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/30 via-transparent to-transparent blur-2xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink-700 bg-ink-900">
              <div className="absolute inset-0 bg-gradient-to-br from-ink-800 to-ink-950" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(225,29,42,0.25),transparent_55%)]" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-widest text-accent">Featured build</p>
                <p className="mt-2 font-display text-2xl text-white">
                  Tesla Model Y — Satin Frozen Black
                </p>
                <p className="mt-1 text-sm text-chrome">Full color-change wrap + ceramic coating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-20 sm:py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Four services, one obsessive standard"
          intro="Every project starts with a clean shop, fresh blades and a plan. Whether you're chasing a new color or protecting factory paint, we install it like it's our own car."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
        </div>
        <div className="mt-10 text-center">
          <Link href="/pricing" className="btn-ghost">See full pricing & packages</Link>
        </div>
      </section>

      {/* WHO WE BUILD FOR */}
      <section className="border-y border-ink-800 bg-ink-900/50">
        <div className="container-x py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Who we build for"
              title="Built around the cars you actually drive."
              intro="We specialize in Tesla, BMW, Mercedes-AMG and other premium platforms. Our patterns, materials and process are dialed in for the cars San Diego drives every day."
            />
            <div className="grid grid-cols-2 gap-3 self-end sm:grid-cols-3">
              {vehicles.slice(0, 6).map((v) => (
                <Link
                  key={v.slug}
                  href={`/vehicles/${v.slug}`}
                  className="rounded-xl border border-ink-700 bg-ink-950/60 px-4 py-6 text-center font-display text-sm tracking-wider text-chrome hover:border-accent hover:text-white"
                >
                  {v.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="How it works"
            title="From quote to keys back in your hand."
          />
          <Link href="/process" className="text-sm font-semibold text-accent hover:text-white">
            See the full process →
          </Link>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            ["01", "Consultation", "Tell us about your car and the look you're after — in person, by text or by phone."],
            ["02", "Custom quote", "We build a transparent quote with material options, coverage and timeline."],
            ["03", "Studio install", "Climate-controlled bay, panel-off where needed, zero shortcuts."],
            ["04", "Aftercare", "Care guide, warranty paperwork and lifetime tech support from our team."],
          ].map(([n, t, d]) => (
            <li key={n} className="card">
              <p className="font-display text-3xl font-semibold text-accent">{n}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{t}</h3>
              <p className="mt-2 text-sm text-chrome">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-ink-800 bg-ink-900/40">
        <div className="container-x py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Reviews"
              title="What our clients say."
              intro="5.0★ across Google, Yelp and Instagram — across every service we offer."
            />
            <Link href="/reviews" className="text-sm font-semibold text-accent hover:text-white">
              All reviews →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                vehicle={t.vehicle}
                quote={t.quote}
                rating={t.rating}
                service={t.service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="container-x py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Materials"
            title="The brands you'll see on the shelf."
            intro="We install only premium films and coatings — never bargain vinyl, never knockoff PPF."
          />
          <Link href="/materials" className="text-sm font-semibold text-accent hover:text-white">
            All brands →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {materials.map((m) => (
            <div
              key={m.name}
              className="grid h-20 place-items-center rounded-xl border border-ink-700 bg-ink-900/60 font-display text-sm tracking-wider text-chrome"
            >
              {m.name}
            </div>
          ))}
        </div>
      </section>

      {/* BLOG TEASE */}
      <section className="border-y border-ink-800 bg-ink-900/30">
        <div className="container-x py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Studio notebook"
              title="Guides from inside the bay."
              intro="Honest, installer-written articles on wraps, PPF, ceramic and tint."
            />
            <Link href="/blog" className="text-sm font-semibold text-accent hover:text-white">
              All articles →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card hover:-translate-y-1">
                <p className="text-xs uppercase tracking-widest text-accent">
                  {p.category} • {p.readMinutes} min
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-chrome">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section className="border-b border-ink-800 bg-gradient-to-b from-ink-950 to-ink-900">
        <div className="container-x grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Latest from the studio</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              See every build on Instagram.
            </h2>
            <p className="mt-4 max-w-lg text-chrome">
              Daily walk-arounds, before/afters, color tests and behind-the-scenes from
              the bay. Follow {site.instagramHandle} to see the latest projects roll out.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Follow {site.instagramHandle}
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg border border-ink-700 bg-gradient-to-br from-ink-800 to-ink-950"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-900 via-ink-900 to-accent/10 p-10 sm:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Ready to build something worth photographing?
            </h2>
            <p className="mt-4 text-chrome">
              Drop us your year/make/model and the look you have in mind — we'll
              come back with a tailored quote within one business day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Start my quote</Link>
              <a href={`tel:${site.phone}`} className="btn-ghost">
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-display text-2xl font-semibold text-white sm:text-3xl">{k}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-chrome">{v}</dd>
    </div>
  );
}
