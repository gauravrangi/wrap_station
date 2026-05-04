import type { Metadata } from "next";
import Link from "next/link";
import { vehicles } from "@/lib/vehicles";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Vehicles We Specialize In — Tesla, BMW, Mercedes, Porsche & More",
  description:
    "Wrap Station has dialed-in patterns for Tesla Model 3, Y, S and X, BMW M-Series, Mercedes-AMG, Porsche and other premium platforms.",
  alternates: { canonical: "/vehicles" },
};

export default function VehiclesIndex() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow="Vehicles"
        title="Built around the cars we install on every day."
        intro="Pick your car to see the most popular wraps, PPF coverage and ceramic packages we build for it."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((v) => (
          <Link key={v.slug} href={`/vehicles/${v.slug}`} className="card hover:-translate-y-1">
            <h2 className="font-display text-2xl font-semibold text-white">{v.name}</h2>
            <p className="mt-3 text-sm text-chrome">{v.intro}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              See packages →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
