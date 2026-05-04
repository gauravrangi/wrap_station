import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${site.name}'s privacy policy — how we collect, use and protect your information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="container-x max-w-3xl py-20">
      <p className="eyebrow">Privacy</p>
      <h1 className="heading mt-3">Privacy Policy</h1>
      <p className="mt-6 text-sm text-chrome">Last updated: May 2026</p>

      <h2 className="mt-12 font-display text-2xl text-white">Information we collect</h2>
      <p className="mt-3 text-chrome">
        When you use the {site.name} website ({site.url}) or contact our studio, we
        may collect: name, email address, phone number, vehicle details and any
        information you voluntarily provide in messages, forms or quote requests.
      </p>

      <h2 className="mt-10 font-display text-2xl text-white">How we use your information</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-chrome">
        <li>To respond to quote requests and schedule installs</li>
        <li>To follow up on completed work and warranty matters</li>
        <li>To send occasional studio updates if you've subscribed</li>
        <li>To improve our services and website experience</li>
      </ul>

      <h2 className="mt-10 font-display text-2xl text-white">Information we don't sell</h2>
      <p className="mt-3 text-chrome">
        We do not sell, rent or trade your personal information to third parties.
        Period.
      </p>

      <h2 className="mt-10 font-display text-2xl text-white">Cookies & analytics</h2>
      <p className="mt-3 text-chrome">
        We use lightweight, privacy-respecting analytics to understand which pages
        are useful and which need work. We do not use third-party advertising
        cookies that track you across other sites.
      </p>

      <h2 className="mt-10 font-display text-2xl text-white">Your rights</h2>
      <p className="mt-3 text-chrome">
        You can request access, correction or deletion of any personal information
        we hold about you at any time by emailing{" "}
        <a className="text-white underline" href={`mailto:${site.email}`}>{site.email}</a>.
        California residents have additional rights under the CCPA, which we honor.
      </p>

      <h2 className="mt-10 font-display text-2xl text-white">Contact</h2>
      <p className="mt-3 text-chrome">
        Questions about this policy? Email{" "}
        <a className="text-white underline" href={`mailto:${site.email}`}>{site.email}</a>{" "}
        or call <a className="text-white underline" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>.
      </p>
    </article>
  );
}
