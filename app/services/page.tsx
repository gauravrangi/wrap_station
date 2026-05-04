import type { Metadata } from "next";
import { services, site } from "@/lib/site";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Services — Vinyl Wrap, PPF, Ceramic Coating, Window Tint",
  description:
    "Explore Wrap Station's San Diego services: full vehicle vinyl wraps, paint protection film (PPF), ceramic coatings and ceramic window tint.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow="Services"
        title="The full Wrap Station lineup"
        intro="One studio, four specialties. Pick a starting point — most clients combine wrap with ceramic, or PPF with tint, for total coverage."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
      </div>
      <p className="mt-12 text-sm text-chrome">
        Pricing is a starting point. Final quotes vary based on vehicle size,
        material selection, coverage area and condition. Call us at{" "}
        <a className="text-white underline" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>{" "}
        for a tailored estimate.
      </p>
    </section>
  );
}
