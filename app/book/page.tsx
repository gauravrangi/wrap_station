import type { Metadata } from "next";
import Link from "next/link";
import CalEmbed from "@/components/CalEmbed";
import SectionHeading from "@/components/SectionHeading";
import { calLink } from "@/lib/booking";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Consultation — Wrap Station San Diego",
  description:
    "Book a free in-studio or virtual consultation with Wrap Station. Pick a time that works and we'll meet you with options for your wrap, PPF, ceramic or tint build.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Book"
          title="Pick a time that works."
          intro="Free 20-minute consultation — in-person at the studio, by phone or by video. We'll talk through your car, the look you want and the materials we'd recommend."
        />
      </section>

      <section className="container-x pb-20">
        <CalEmbed calLink={calLink} />
      </section>

      <section className="container-x pb-20">
        <div className="rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-900 to-accent/10 p-8 sm:p-12">
          <p className="eyebrow">Prefer to skip the calendar?</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
            Text or call us anytime.
          </h2>
          <p className="mt-3 max-w-xl text-chrome">
            Send your year/make/model and what you're after — we'll come back with
            options and pricing within one business day.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={`tel:${site.phone}`} className="btn-primary">{site.phoneDisplay}</a>
            <Link href="/contact" className="btn-ghost">Send a quote request</Link>
          </div>
        </div>
      </section>
    </>
  );
}
