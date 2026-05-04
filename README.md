# Wrap Station

Marketing site for **Wrap Station** — San Diego's premium studio for vinyl wraps,
paint protection film (PPF), ceramic coatings and window tint.

Built with **Next.js 14 (App Router)** + **Tailwind CSS** + **TypeScript**, optimized
for organic search and local SEO.

## Stack & SEO highlights

- Next.js App Router with full SSG (every page pre-rendered as HTML)
- Per-page `<title>`, meta descriptions and canonical URLs via the Metadata API
- Open Graph + Twitter cards (auto-generated OG image at `/opengraph-image`)
- `sitemap.xml`, `robots.txt` and PWA `manifest` generated programmatically
- Structured data (JSON-LD): `LocalBusiness` / `AutoBodyShop`, `Service`,
  `BreadcrumbList`, `FAQPage`, `OfferCatalog`, `OpeningHoursSpecification`,
  `GeoCoordinates`, `AreaServed`
- Semantic HTML, skip-link, accessible nav and form labels
- System fonts via `next/font` for zero CLS
- Dark, premium brand styling tuned for the Tesla/BMW/Mercedes audience

## Local development

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev
# → http://localhost:3000
```

## Integrations

| Feature | Lives at | How it works |
| --- | --- | --- |
| Lead emails (quote form) | `app/api/quote/route.ts` | POSTs to Resend. Set `RESEND_API_KEY`, `QUOTE_TO_EMAIL`, `QUOTE_FROM_EMAIL` in `.env.local`. |
| Booking calendar | `/book` (`components/CalEmbed.tsx`) | Inline Cal.com embed. Set `NEXT_PUBLIC_CAL_LINK` to your `<user>/<event-slug>`. |
| Instagram feed | Home page + `lib/instagram.ts` | Add post permalinks to the array — they render via Instagram's official `embed.js`. Falls back to a styled placeholder grid when empty. |
| Gallery imagery | `lib/gallery.ts` + `app/gallery/[slug]/image/route.tsx` | Each gallery card has its image generated at request time by `next/og` using a per-item color palette. To use real photos instead, replace the `<Image src="/gallery/<slug>/image" />` line in `app/gallery/page.tsx` with paths into `/public/gallery/...`. |

## Project structure

```
app/
  layout.tsx           # global metadata + JSON-LD LocalBusiness
  page.tsx             # home
  sitemap.ts           # dynamic sitemap.xml
  robots.ts            # robots.txt
  manifest.ts          # PWA manifest
  opengraph-image.tsx  # auto-generated 1200x630 OG image
  services/[slug]/     # one SEO-rich page per service
  about/  contact/  gallery/  not-found.tsx
components/            # Header, Footer, Cards, QuoteForm, etc.
lib/
  site.ts              # business info, services, pricing, hours
  jsonld.ts            # structured-data builders
  faqs.ts              # FAQ content per service
public/                # favicon, OG fallback, future gallery photos
```

## Editing content

| Want to change… | Edit |
| --- | --- |
| Address / phone / hours / service areas | `lib/site.ts` |
| A service title, price, copy or bullets | `lib/site.ts` (`services` array) |
| FAQ on a service page | `lib/faqs.ts` |
| Hero, "Who we build for", process steps | `app/page.tsx` |
| About-page copy | `app/about/page.tsx` |
| Gallery (replace placeholders with photos) | `app/gallery/page.tsx` + `public/gallery/` |

## Instagram

The home page links and the footer point at
[@wrapstationsocal](https://www.instagram.com/wrapstationsocal/).

To embed live posts, the cleanest path is the official Instagram Basic Display
API or a service like [SnapWidget](https://snapwidget.com/) — drop the embed
markup into the Instagram section in `app/page.tsx`. (Live IG scraping is against
their TOS and breaks regularly.)

## Deployment

This is a stock Next.js app — deploy to **Vercel** (one click), Netlify or any
Node host. Set the production URL in `lib/site.ts` (`site.url`) before deploying
so all canonical and OG URLs resolve correctly.
