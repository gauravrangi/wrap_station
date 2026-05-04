import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Aftercare Guide — Caring for Your Wrap, PPF, Ceramic & Tint",
  description:
    "How to care for your vinyl wrap, paint protection film, ceramic coating and window tint after a Wrap Station install — written by our installers.",
  alternates: { canonical: "/aftercare" },
};

const sections = [
  {
    title: "First 7 days",
    items: [
      "Don't wash the car for 7 days after a wrap or PPF install — the adhesive needs time to cure.",
      "Don't roll down freshly tinted windows for 4 days; gel can streak as it cures.",
      "Avoid rain or sprinklers within 24 hours of a fresh ceramic application.",
      "Park in shade or in a garage where possible during the first week.",
    ],
  },
  {
    title: "Washing your wrap or PPF",
    items: [
      "Hand wash only with pH-neutral soap (we recommend Carpro Reset or Gyeon Bathe).",
      "Use a soft microfiber wash mitt — no brushes, no automatic car washes with brushes.",
      "Touchless car washes are okay but avoid harsh acidic wheel cleaners on wrap edges.",
      "Dry with a clean microfiber or filtered-air dryer to avoid water spots.",
    ],
  },
  {
    title: "Caring for ceramic coatings",
    items: [
      "Wash every 2–3 weeks. The hydrophobic top layer keeps dirt loose, but consistent washing maintains the slickness.",
      "Use a dedicated ceramic-safe shampoo (Gyeon Bathe+, Gtechniq Wash).",
      "Apply a maintenance booster every 4–6 months (we sell our preferred brand at the studio).",
      "Avoid traditional waxes — they can sit on top of the coating and reduce hydrophobicity.",
    ],
  },
  {
    title: "Caring for tint",
    items: [
      "Wait 4 days before rolling down windows.",
      "Don't clean tint with ammonia-based cleaners. Use a tint-safe glass cleaner and a microfiber.",
      "Tint may appear hazy or have small water bubbles for the first 2–3 weeks — this is normal as moisture evaporates.",
    ],
  },
  {
    title: "What to avoid (anything)",
    items: [
      "Automatic car washes with rotating brushes",
      "Pressure washing within 6 inches of any film edge",
      "Gas pump splashes — wipe immediately if any hit the wrap or PPF",
      "Bird droppings or tree sap left longer than a day — wipe gently with a damp microfiber",
    ],
  },
];

export default function AftercarePage() {
  return (
    <>
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Aftercare"
          title="Take care of the install — it'll take care of your car."
          intro="Quick reference guide for the first week and the first year. Save this page or screenshot it before you leave the studio."
        />
      </section>

      {sections.map((s) => (
        <section key={s.title} className="border-t border-ink-800 py-12">
          <div className="container-x">
            <h2 className="font-display text-2xl font-semibold text-white">{s.title}</h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {s.items.map((i) => (
                <li key={i} className="flex gap-3 rounded-xl border border-ink-700 bg-ink-900/40 p-4 text-sm text-chrome">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
