"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** e.g. "wrapstationsocal/quote" */
  calLink: string;
  /** "dark" | "light" */
  theme?: "dark" | "light";
};

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & {
      ns?: Record<string, (...args: unknown[]) => void>;
      loaded?: boolean;
      q?: unknown[];
    };
  }
}

export default function CalEmbed({ calLink, theme = "dark" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cal.com embed bootstrap (official snippet, abbreviated)
    if (!window.Cal) {
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      script.onload = () => init();
      document.head.appendChild(script);
    } else {
      init();
    }

    function init() {
      if (!window.Cal || !ref.current) return;
      window.Cal("init", { origin: "https://cal.com" });
      window.Cal("inline", {
        elementOrSelector: ref.current,
        calLink,
        config: { theme, layout: "month_view" },
      });
      window.Cal("ui", {
        theme,
        styles: { branding: { brandColor: "#e11d2a" } },
        hideEventTypeDetails: false,
      });
    }
  }, [calLink, theme]);

  return (
    <div
      ref={ref}
      className="min-h-[640px] w-full overflow-hidden rounded-2xl border border-ink-700 bg-ink-900"
    />
  );
}
