import Link from "next/link";
import { site, services } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink-800 bg-ink-950">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
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
              Instagram {site.instagramHandle}
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-chrome">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Studio
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-chrome">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${site.address.street} ${site.address.locality} ${site.address.region}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Directions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-800">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-chrome sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>Serving {site.serviceAreas.slice(0, 5).join(" • ")} & all of San Diego County.</p>
        </div>
      </div>
    </footer>
  );
}
