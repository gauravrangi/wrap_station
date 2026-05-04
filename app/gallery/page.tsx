import type { Metadata } from "next";
import { site } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery — Recent Wraps, PPF & Ceramic Builds",
  description:
    "Browse recent Wrap Station builds: Tesla color-change wraps, BMW PPF installs, Mercedes ceramic coatings and more — all completed in our San Diego studio.",
  alternates: { canonical: "/gallery" },
};

const placeholders = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  title: [
    "Tesla Model Y — Satin Frozen Black",
    "BMW M4 — Full PPF + Ceramic",
    "Mercedes G63 — Matte Military Green",
    "Tesla Model 3 — Gloss Burnt Orange",
    "Porsche 911 — Stek Dynoshield PPF",
    "Audi RS6 — Nardo Grey Wrap",
    "Tesla Model S — Ceramic Tint Package",
    "BMW i7 — Satin Pearl White Wrap",
    "Lucid Air — Full Body XPEL",
  ][i],
  service: ["Vinyl Wrap", "PPF", "Vinyl Wrap", "Vinyl Wrap", "PPF", "Vinyl Wrap", "Window Tint", "Vinyl Wrap", "PPF"][i],
}));

export default function GalleryPage() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow="Gallery"
        title="Recent builds from the studio"
        intro={`A snapshot of recent work. The freshest projects always go up first on Instagram — follow ${site.instagramHandle}.`}
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((p) => (
          <figure key={p.id} className="group overflow-hidden rounded-2xl border border-ink-700 bg-ink-900">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-ink-700 via-ink-900 to-ink-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(225,29,42,0.15),transparent_60%)] transition group-hover:opacity-80" />
            </div>
            <figcaption className="border-t border-ink-700 p-4">
              <p className="text-xs uppercase tracking-widest text-accent">{p.service}</p>
              <p className="mt-1 font-display text-base font-semibold text-white">{p.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-12 rounded-2xl border border-dashed border-ink-700 p-6 text-sm text-chrome">
        <strong className="text-white">Photos coming soon.</strong> Drop your own
        gallery shots in <code className="rounded bg-ink-800 px-1.5 py-0.5">/public/gallery/</code>{" "}
        and replace the placeholders in <code className="rounded bg-ink-800 px-1.5 py-0.5">app/gallery/page.tsx</code>{" "}
        — or hand them off and we'll wire it up.
      </div>
    </section>
  );
}
