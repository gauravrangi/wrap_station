import type { Metadata } from "next";
import Link from "next/link";
import { materials } from "@/lib/materials";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Materials & Brands — 3M, Avery, KPMF, XPEL, Stek, Gtechniq",
  description:
    "We install only premium films and coatings: 3M, Avery Dennison, KPMF, Inozetek, XPEL, Stek, Gtechniq and Modesta. Here's why each one matters.",
  alternates: { canonical: "/materials" },
};

export default function MaterialsPage() {
  return (
    <>
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Materials & brands"
          title="The shop is only as good as what goes on the car."
          intro="We install brands we'd put on our own vehicles — never bargain vinyl, never knockoff PPF. Here's what's on our shelves and why."
        />
      </section>

      <section className="border-t border-ink-800 bg-ink-900/30">
        <div className="container-x py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {materials.map((m) => (
              <article key={m.name} className="card">
                <p className="text-xs uppercase tracking-widest text-accent">{m.category}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-white">{m.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-chrome">{m.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {m.products.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-ink-700 px-3 py-1 text-xs text-chrome"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-900 to-accent/10 p-10 sm:p-14">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Not sure which film is right for your car?
          </h2>
          <p className="mt-4 max-w-2xl text-chrome">
            Tell us your year/make/model and what you're after and we'll recommend the
            exact film and finish. No upselling, no nonsense.
          </p>
          <Link href="/contact" className="btn-primary mt-6">Get my recommendation</Link>
        </div>
      </section>
    </>
  );
}
