"use client";

import { useEffect } from "react";
import { instagramPosts, instagramUrl } from "@/lib/instagram";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramFeed() {
  const hasPosts = instagramPosts.length > 0;

  useEffect(() => {
    if (!hasPosts) return;
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]'
    );
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      s.onload = () => window.instgrm?.Embeds.process();
      document.body.appendChild(s);
    } else {
      window.instgrm?.Embeds.process();
    }
  }, [hasPosts]);

  if (hasPosts) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {instagramPosts.slice(0, 6).map((url) => (
          <div
            key={url}
            className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 p-2"
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "#0c0d10",
                border: 0,
                margin: 0,
                width: "100%",
                minWidth: "240px",
              }}
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                View on Instagram
              </a>
            </blockquote>
          </div>
        ))}
      </div>
    );
  }

  // Fallback: stylized placeholder grid + clear CTA
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <a
            key={i}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-lg border border-ink-700 bg-gradient-to-br from-ink-800 to-ink-950"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(225,29,42,0.18),transparent_60%)] transition group-hover:opacity-80" />
            <div className="absolute bottom-2 left-2 right-2 text-[10px] uppercase tracking-widest text-chrome opacity-60">
              @wrapstationsocal
            </div>
          </a>
        ))}
      </div>
      <p className="mt-4 text-xs text-chrome">
        Showing the brand placeholder. Add your latest 6 post permalinks to{" "}
        <code className="rounded bg-ink-800 px-1 py-0.5">lib/instagram.ts</code>{" "}
        and the live posts will render here automatically.
      </p>
    </div>
  );
}
