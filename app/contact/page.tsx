import type { Metadata } from "next";
import { site } from "@/lib/site";
import QuoteForm from "@/components/QuoteForm";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact & Quote Request — Wrap Station San Diego",
  description:
    "Request a free quote from Wrap Station — San Diego's premier vinyl wrap, PPF, ceramic coating and window tint studio. Located in Sorrento Mesa.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="container-x py-20">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something photo-worthy."
            intro="Tell us a little about your car and what you're after. We'll come back within one business day with options and pricing."
          />
          <div className="mt-10 space-y-6 text-sm text-chrome">
            <div>
              <p className="text-xs uppercase tracking-wider text-accent">Studio</p>
              <p className="mt-2 text-white">{site.address.street}</p>
              <p>{site.address.locality}, {site.address.region} {site.address.postal}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent">Phone</p>
              <a href={`tel:${site.phone}`} className="mt-2 block text-white hover:text-accent">
                {site.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent">Instagram</p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-white hover:text-accent"
              >
                {site.instagramHandle}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent">Hours</p>
              <ul className="mt-2 space-y-1 text-white">
                {site.hours.map((h) => (
                  <li key={h.d} className="flex justify-between gap-6">
                    <span>{h.d}</span>
                    <span className="text-chrome">{h.o} – {h.c}</span>
                  </li>
                ))}
                <li className="flex justify-between gap-6">
                  <span>Sun</span>
                  <span className="text-chrome">By appointment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="card">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
