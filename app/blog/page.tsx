import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog — Wrap, PPF, Ceramic & Tint Guides from a San Diego Studio",
  description:
    "Honest, installer-written guides on vinyl wraps, paint protection film, ceramic coatings and window tint — written from inside Wrap Station's Sorrento Mesa studio.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Wrap Station Blog",
    description:
      "Installer-written guides on vinyl wraps, PPF, ceramic and tint from San Diego.",
    type: "website",
  },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow="Studio notebook"
        title="Wraps, PPF, ceramic and tint — explained."
        intro="Long-form guides from the bay floor. No filler, no SEO-spam — just what we'd tell a friend who walked in asking."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {sorted.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="card group flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-accent">
                {p.category} • {p.readMinutes} min read
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white group-hover:text-accent">
                {p.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-chrome">{p.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-chrome">
              <time dateTime={p.date}>
                {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
              <span className="font-semibold text-white">Read →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
