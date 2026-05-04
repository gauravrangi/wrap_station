import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `${site.name}'s terms of service for booking installs, warranty claims and use of the website.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <article className="container-x max-w-3xl py-20">
      <p className="eyebrow">Terms</p>
      <h1 className="heading mt-3">Terms of Service</h1>
      <p className="mt-6 text-sm text-chrome">Last updated: May 2026</p>

      <h2 className="mt-12 font-display text-2xl text-white">Booking & deposits</h2>
      <p className="mt-3 text-chrome">
        We hold studio time with a 25% non-refundable deposit. Deposits roll to a
        new date if rescheduled with 7+ days notice.
      </p>

      <h2 className="mt-10 font-display text-2xl text-white">Payment</h2>
      <p className="mt-3 text-chrome">
        Final payment is due on pickup. We accept cards, ACH and select financing
        providers (Affirm, Klarna). All prices are in USD and exclude applicable
        California sales tax where relevant.
      </p>

      <h2 className="mt-10 font-display text-2xl text-white">Pre-existing conditions</h2>
      <p className="mt-3 text-chrome">
        We document the condition of each vehicle on drop-off. Existing paint
        damage, dents, prior film or aftermarket modifications are noted in our
        intake photos. We are not liable for issues that pre-date the install.
      </p>

      <h2 className="mt-10 font-display text-2xl text-white">Warranty</h2>
      <p className="mt-3 text-chrome">
        Manufacturer warranty terms vary by product (see our{" "}
        <a className="text-white underline" href="/warranty">Warranty page</a>).
        Studio guarantees cover workmanship issues caught within 30 days of pickup.
        Warranties do not cover damage from accidents, automatic car washes, harsh
        chemicals, or improper aftercare.
      </p>

      <h2 className="mt-10 font-display text-2xl text-white">Liability</h2>
      <p className="mt-3 text-chrome">
        Our maximum liability for any claim is limited to the amount paid for the
        specific service in question. We are not liable for indirect, consequential,
        or incidental damages.
      </p>

      <h2 className="mt-10 font-display text-2xl text-white">Website use</h2>
      <p className="mt-3 text-chrome">
        Content on {site.url} is provided for informational purposes. We make
        reasonable efforts to keep pricing, materials and timelines accurate but
        reserve the right to update content at any time.
      </p>

      <h2 className="mt-10 font-display text-2xl text-white">Contact</h2>
      <p className="mt-3 text-chrome">
        Questions? Email{" "}
        <a className="text-white underline" href={`mailto:${site.email}`}>{site.email}</a>{" "}
        or call <a className="text-white underline" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>.
      </p>
    </article>
  );
}
