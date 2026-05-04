import type { Metadata } from "next";
import Link from "next/link";
import { generalFaqs } from "@/lib/general-faqs";
import { faqsByService } from "@/lib/faqs";
import { services, site } from "@/lib/site";
import { faqJsonLd } from "@/lib/jsonld";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "FAQ — Vinyl Wrap, PPF, Ceramic & Tint Questions",
  description:
    "Common questions about vinyl wraps, paint protection film, ceramic coatings and window tint — answered by Wrap Station's San Diego installers.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const groups = [
    { title: "General", faqs: generalFaqs },
    ...services.map((s) => ({ title: s.title, faqs: faqsByService[s.slug] ?? [] })),
  ].filter((g) => g.faqs.length > 0);

  const allFaqs = groups.flatMap((g) => g.faqs);

  return (
    <>
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered honestly."
          intro="Don't see your question? Text or call the studio — we love this stuff."
        />
        <div className="mt-8 flex flex-wrap gap-2 text-sm">
          {groups.map((g) => (
            <a
              key={g.title}
              href={`#${g.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-ink-700 px-4 py-2 text-chrome hover:border-accent hover:text-white"
            >
              {g.title}
            </a>
          ))}
        </div>
      </section>

      {groups.map((g) => (
        <section
          key={g.title}
          id={g.title.toLowerCase().replace(/\s+/g, "-")}
          className="border-t border-ink-800 py-16"
        >
          <div className="container-x">
            <h2 className="font-display text-2xl font-semibold text-white">{g.title}</h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {g.faqs.map((f) => (
                <details key={f.q} className="card group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-display text-base font-semibold text-white">{f.q}</span>
                    <span className="text-accent transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-chrome">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="container-x py-20">
        <div className="rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-900 to-accent/10 p-10 sm:p-14">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Still have questions?
          </h2>
          <p className="mt-4 max-w-2xl text-chrome">
            Text the studio, give us a call, or send your year/make/model and we'll
            come back with a tailored answer.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Send us a message</Link>
            <a href={`tel:${site.phone}`} className="btn-ghost">{site.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(allFaqs)) }}
      />
    </>
  );
}
