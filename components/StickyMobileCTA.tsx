import Link from "next/link";
import { site } from "@/lib/site";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink-800 bg-ink-950/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex items-center gap-3">
        <a
          href={`tel:${site.phone}`}
          className="flex-1 rounded-full border border-ink-700 px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Call
        </a>
        <Link
          href="/contact"
          className="flex-1 rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
