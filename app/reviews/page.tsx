import type { Metadata } from "next";
import Link from "next/link";
import { testimonials, aggregateRating } from "@/lib/testimonials";
import { site } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import Stars from "@/components/Stars";

export const metadata: Metadata = {
  title: "Reviews — What Wrap Station Clients Are Saying",
  description:
    "Real client reviews of Wrap Station's vinyl wrap, paint protection film, ceramic coating and window tint installs in San Diego.",
  alternates: { canonical: "/reviews" },
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: aggregateRating.value.toFixed(1),
    reviewCount: aggregateRating.count,
    bestRating: 5,
    worstRating: 1,
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: t.quote,
    datePublished: t.date,
    itemReviewed: { "@type": "Service", name: t.service },
  })),
};

export default function ReviewsPage() {
  return (
    <>
      <section className="container-x py-20">
        <p className="eyebrow">Reviews</p>
        <h1 className="heading mt-3">5.0 ★ across {aggregateRating.count}+ verified clients.</h1>
        <div className="mt-6 flex items-center gap-4">
          <Stars rating={5} />
          <span className="text-sm text-chrome">
            {aggregateRating.value.toFixed(1)} out of 5 — Google, Yelp & Instagram
          </span>
        </div>
        <p className="mt-6 max-w-2xl text-lg text-chrome">
          We're proud to be a 5-star studio across every platform. The reviews below
          are real clients, real cars and real builds — most of which you can see on
          our gallery and Instagram.
        </p>
      </section>

      <section className="border-t border-ink-800 bg-ink-900/30">
        <div className="container-x py-20">
          <SectionHeading eyebrow="Recent reviews" title="From the studio inbox." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
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

      <section className="container-x py-20">
        <div className="rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-900 to-accent/10 p-10 sm:p-14">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Want to be next?
          </h2>
          <p className="mt-4 max-w-2xl text-chrome">
            Most of our clients come from word of mouth. We'd love to add your build
            to the gallery.
          </p>
          <Link href="/contact" className="btn-primary mt-6">Start my quote</Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
    </>
  );
}
