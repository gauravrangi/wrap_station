import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/lib/locations";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Service Areas — Wrap, PPF, Ceramic & Tint Across San Diego County",
  description:
    "Wrap Station serves La Jolla, Del Mar, Carmel Valley, Encinitas, Rancho Santa Fe and all of San Diego County from our Sorrento Mesa studio.",
  alternates: { canonical: "/locations" },
};

export default function LocationsIndex() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow="Service areas"
        title="Drivers across San Diego County trust Wrap Station."
        intro="Our Sorrento Mesa studio is centrally located between the 5 and the 805 — most North County clients are 10–20 minutes away."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((l) => (
          <Link key={l.slug} href={`/locations/${l.slug}`} className="card hover:-translate-y-1">
            <p className="text-xs uppercase tracking-widest text-accent">{l.drive} from studio</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white">{l.name}</h2>
            <p className="mt-3 text-sm text-chrome">{l.intro}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
