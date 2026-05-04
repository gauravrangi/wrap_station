/**
 * Cal.com booking handle. Override with NEXT_PUBLIC_CAL_LINK.
 * Format is "<username>/<event-slug>", e.g. "wrapstationsocal/quote".
 */
export const calLink =
  process.env.NEXT_PUBLIC_CAL_LINK || "wrapstationsocal/quote";
