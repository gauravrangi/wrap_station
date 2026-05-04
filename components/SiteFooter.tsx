import Link from "next/link";
import Newsletter from "./Newsletter";
import { site, services } from "@/lib/site";
import { locations } from "@/lib/locations";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink-800 bg-ink-950">
      <div className="container-x grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center rounded-md bg-accent font-display text-sm font-bold"
            >
              WS
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              Wrap <span className="text-accent">Station</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-chrome">
            San Diego's premium studio for vinyl wraps, paint protection film, ceramic
            coatings and window tint. Trusted by Tesla, BMW and Mercedes owners across
            North County.
          </p>
          <p className="mt-6 text-sm text-chrome">
            <strong className="text-white">{site.address.street}</strong>
            <br />
            {site.address.locality}, {site.address.region} {site.address.postal}
          </p>
          <p className="mt-2 text-sm">
            <a href={`tel:${site.phone}`} className="text-white hover:text-accent">
              {site.phoneDisplay}
            </a>
            <span className="mx-2 text-ink-600">•</span>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent"
            >
              {site.instagramHandle}
            </a>
          </p>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-accent">Studio updates</p>
            <p className="mt-2 text-sm text-chrome">
              Recent builds, color drops and seasonal specials — once a month, no spam.
            </p>
            <div className="mt-4">
              <Newsletter />
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-chrome">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link>
              </li>
            ))}
            <li><Link href="/pricing" className="hover:text-white">Pricing & packages</Link></li>
            <li><Link href="/materials" className="hover:text-white">Materials & brands</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Service Areas
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-chrome">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="hover:text-white">{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Studio
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-chrome">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/process" className="hover:text-white">Our Process</Link></li>
            <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/aftercare" className="hover:text-white">Aftercare</Link></li>
            <li><Link href="/warranty" className="hover:text-white">Warranty</Link></li>
            <li><Link href="/book" className="hover:text-white">Book a Visit</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-chrome sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
