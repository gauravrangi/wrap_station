import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Warranty — Wraps, PPF, Ceramic Coatings & Window Tint",
  description:
    "Wrap Station warranty terms for vinyl wraps, paint protection film, ceramic coatings and window tint installs. Manufacturer + studio coverage.",
  alternates: { canonical: "/warranty" },
};

const items = [
  {
    title: "Vinyl Wrap",
    duration: "Up to 7 years",
    covers: "Cracking, lifting, color shift, adhesive failure",
    notes:
      "Warranty length depends on film line (3M 2080, Avery SW900, KPMF, Inozetek). Pre-existing paint defects, accidents and improper aftercare are not covered.",
  },
  {
    title: "Paint Protection Film",
    duration: "10 years",
    covers: "Yellowing, cracking, delamination, top-coat failure",
    notes:
      "Covered by XPEL or Stek manufacturer warranty. Self-healing top coat warranted for the full 10-year term.",
  },
  {
    title: "Ceramic Coating",
    duration: "2, 5 or 7+ years",
    covers: "Loss of hydrophobicity, gloss degradation",
    notes:
      "Tied to the system selected. Some coatings (Gtechniq Crystal Serum Ultra) require an annual inspection at the studio to maintain warranty.",
  },
  {
    title: "Window Tint",
    duration: "Lifetime",
    covers: "Bubbling, peeling, fading, color change",
    notes:
      "Lifetime warranty on premium ceramic and carbon films. Covers original purchaser for as long as you own the vehicle.",
  },
];

export default function WarrantyPage() {
  return (
    <>
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Warranty"
          title="Backed by the manufacturer — and by us."
          intro="Every install includes a manufacturer warranty plus our own studio guarantee. If something isn't right, bring it back. We'll make it right."
        />
      </section>

      <section className="border-t border-ink-800 bg-ink-900/30">
        <div className="container-x py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((i) => (
              <article key={i.title} className="card">
                <p className="text-xs uppercase tracking-widest text-accent">{i.duration}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-white">{i.title}</h2>
                <p className="mt-3 text-sm font-semibold text-white">Covers</p>
                <p className="mt-1 text-sm text-chrome">{i.covers}</p>
                <p className="mt-3 text-sm font-semibold text-white">Notes</p>
                <p className="mt-1 text-sm text-chrome">{i.notes}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-900 to-accent/10 p-10 sm:p-14">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Need a warranty claim?
          </h2>
          <p className="mt-4 max-w-2xl text-chrome">
            Send us a few photos and the install date — we'll handle the manufacturer
            paperwork and get you on the books.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Submit a claim</Link>
            <a href={`tel:${site.phone}`} className="btn-ghost">{site.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </>
  );
}
