import type { Metadata } from "next";
import Link from "next/link";
import { galleryItems } from "@/lib/gallery";
import { site } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery — Recent Wraps, PPF & Ceramic Builds",
  description:
    "Browse recent Wrap Station builds: Tesla color-change wraps, BMW PPF installs, Mercedes ceramic coatings and more — all completed in our San Diego studio.",
  alternates: { canonical: "/gallery" },
};

const filters = ["All", "Vinyl Wrap", "PPF", "Ceramic", "Window Tint"] as const;

export default function GalleryPage() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow="Gallery"
        title="Recent builds from the studio"
        intro={`Selected projects from the last few months. The freshest work always lands first on Instagram — follow ${site.instagramHandle}.`}
      />

      <div className="mt-10 flex flex-wrap gap-2 text-sm">
        {filters.map((f) => (
          <span
            key={f}
            className={`rounded-full border px-4 py-2 ${
              f === "All" ? "border-accent text-white" : "border-ink-700 text-chrome"
            }`}
          >
            {f}
          </span>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((g) => {
          const [from, to] = g.palette;
          return (
            <figure
              key={g.slug}
              className="group overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 transition hover:-translate-y-1"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ background: `radial-gradient(circle at 30% 25%, ${to}, ${from})` }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)] transition group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-accent">{g.service}</p>
                  <p className="mt-1 font-display text-xl font-semibold leading-tight">{g.title}</p>
                </div>
                <div className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-md bg-accent text-[10px] font-bold text-white">
                  WS
                </div>
              </div>
              <figcaption className="border-t border-ink-700 p-5">
                <p className="text-xs uppercase tracking-widest text-accent">{g.service}</p>
                <p className="mt-1 font-display text-base font-semibold text-white">{g.title}</p>
                <p className="mt-1 text-xs text-chrome">{g.vehicle}</p>
                <p className="mt-3 text-sm text-chrome">{g.caption}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="mt-16 rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-900 to-accent/10 p-10">
        <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
          Want your build in the gallery?
        </h2>
        <p className="mt-3 max-w-xl text-chrome">
          Bring us your car and we'll add the build to the studio book.
        </p>
        <Link href="/contact" className="btn-primary mt-6">Start my project</Link>
      </div>
    </section>
  );
}
