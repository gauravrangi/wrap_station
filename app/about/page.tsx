import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About — San Diego's Premier Wrap, PPF & Ceramic Studio",
  description:
    "Wrap Station is a Sorrento Mesa studio specializing in vinyl wraps, paint protection film, ceramic coatings and window tint for Tesla, BMW and Mercedes.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="container-x py-20">
        <p className="eyebrow">About</p>
        <h1 className="heading mt-3 max-w-3xl">
          A San Diego studio obsessed with the details others miss.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-chrome">
          Wrap Station was built on a simple idea: cars deserve to be installed
          on, not rushed through. Our Sorrento Mesa studio is climate-controlled,
          dust-managed and stocked with premium films from 3M, Avery Dennison,
          KPMF, XPEL and Stek — so every install starts with the right material
          for the job.
        </p>
      </section>

      <section className="border-y border-ink-800 bg-ink-900/40">
        <div className="container-x grid gap-10 py-20 lg:grid-cols-3">
          <SectionHeading
            eyebrow="The studio"
            title="Why drivers choose Wrap Station."
            intro="Premium materials, certified installers and a process built for cars worth protecting."
          />
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {[
              ["Certified installers", "Trained on the latest patterns, plotters and panel-off techniques for Tesla, BMW M, Mercedes-AMG and more."],
              ["Premium films only", "We stock and install the films we'd put on our own cars — never bargain vinyl or knockoff PPF."],
              ["Manufacturer warranties", "Up to 7 years on wraps, 10 on PPF and lifetime on tint — backed by the brands and by us."],
              ["Honest, transparent quotes", "No surprise add-ons, no upselling. You see the material, the coverage and the timeline upfront."],
            ].map(([t, d]) => (
              <div key={t} className="card">
                <h3 className="font-display text-lg font-semibold text-white">{t}</h3>
                <p className="mt-2 text-sm text-chrome">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Visit the studio</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Drop by Sorrento Mesa.
            </h2>
            <p className="mt-4 text-chrome">
              We're a few minutes from the 805 and easy to reach from La Jolla,
              Del Mar, Carmel Valley and the rest of North County.
            </p>
            <address className="mt-6 not-italic text-white">
              {site.address.street}
              <br />
              {site.address.locality}, {site.address.region} {site.address.postal}
            </address>
            <p className="mt-4 text-chrome">
              <a href={`tel:${site.phone}`} className="text-white hover:text-accent">
                {site.phoneDisplay}
              </a>
            </p>
            <Link href="/contact" className="btn-primary mt-8">Book a visit</Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink-700">
            <iframe
              title="Wrap Station location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postal}`
              )}&output=embed`}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
