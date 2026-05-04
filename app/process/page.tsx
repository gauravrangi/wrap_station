import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Our Process — How We Install at Wrap Station",
  description:
    "Step by step: how Wrap Station turns your car into a flawless vinyl wrap, PPF, ceramic or window tint install — from quote to keys back in your hand.",
  alternates: { canonical: "/process" },
};

const steps = [
  {
    n: "01",
    t: "Consultation & quote",
    d: "Tell us about your car and the look you're after. We can quote in person at the studio, by text or remotely from photos. Quotes break out material, coverage and timeline so there are no surprises later.",
  },
  {
    n: "02",
    t: "Booking & deposit",
    d: "We hold your studio time with a 25% deposit. We'll send a calendar invite, an aftercare preview and a checklist for drop-off day.",
  },
  {
    n: "03",
    t: "Pre-install inspection",
    d: "On drop-off, we walk the entire car together — paint condition, existing dings, prior film. Everything is photographed and documented.",
  },
  {
    n: "04",
    t: "Decontamination & prep",
    d: "Clay bar, iron-X, IPA wipe-down. Every panel is decontaminated so adhesives bond cleanly. For PPF and ceramic, this stage is where the magic happens.",
  },
  {
    n: "05",
    t: "Studio install",
    d: "Climate-controlled bay, clean blades, panel-off where required. Mirrors come off. Door jambs are wrapped. Edges are tucked. Nothing is rushed.",
  },
  {
    n: "06",
    t: "QC walkthrough",
    d: "Two installers QC every panel before the car leaves. We look for dust, lifted edges, alignment — anything that wouldn't pass our personal-car standard.",
  },
  {
    n: "07",
    t: "Pickup & aftercare",
    d: "We hand over your aftercare guide, warranty paperwork and walk through the do's and don'ts of the first 7 days. You leave with our cell numbers.",
  },
  {
    n: "08",
    t: "Lifetime support",
    d: "Got a question six months in? Text us a photo. We support every install we do, in person or remotely, for as long as you own the car.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Our process"
          title="How a Wrap Station build actually works."
          intro="Eight steps, the same way for every car — from your daily Model Y to a one-of-one AMG."
        />
      </section>

      <section className="border-t border-ink-800">
        <div className="container-x py-12">
          <ol className="grid gap-6 md:grid-cols-2">
            {steps.map((s) => (
              <li key={s.n} className="card">
                <p className="font-display text-3xl font-semibold text-accent">{s.n}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-chrome">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-900 to-accent/10 p-10 sm:p-14">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Ready to start?
          </h2>
          <p className="mt-4 max-w-2xl text-chrome">
            Drop us your year/make/model and we'll come back with options and a
            studio time within one business day.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Start my quote</Link>
            <a href={`tel:${site.phone}`} className="btn-ghost">{site.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </>
  );
}
