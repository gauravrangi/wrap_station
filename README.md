# Wrap Station

Marketing site for **Wrap Station** — San Diego's premium studio for vinyl wraps,
paint protection film (PPF), ceramic coatings and window tint.

Built with **Next.js 14 (App Router)** + **Tailwind CSS** + **TypeScript**, configured
for **static export** so it can be hosted on GitHub Pages, Cloudflare Pages, Netlify,
S3 or any static host.

## Stack & SEO highlights

- Next.js App Router with static export (`output: 'export'`) — every page pre-rendered as HTML
- Per-page `<title>`, meta descriptions and canonical URLs via the Metadata API
- Open Graph + Twitter cards (auto-generated 1200×630 OG image at `/opengraph-image`)
- `sitemap.xml`, `robots.txt` and PWA `manifest` generated programmatically
- Structured data (JSON-LD): `LocalBusiness` / `AutoBodyShop`, `Service`,
  `BreadcrumbList`, `FAQPage`, `OfferCatalog`, `OpeningHoursSpecification`,
  `GeoCoordinates`, `AreaServed`, `BlogPosting`, `AggregateRating`, `Review`
- Semantic HTML, skip-link, accessible nav and form labels
- Cal.com inline embed at `/book` and Instagram embed support on the home page
- Dark, premium brand styling tuned for the Tesla / BMW / Mercedes audience

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploying to GitHub Pages

A GitHub Actions workflow in `.github/workflows/deploy.yml` builds the static
site and publishes it to GitHub Pages on every push to `main`.

One-time setup in your repo:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push to `main` (or click *Run workflow* in the Actions tab)
3. The site will be live at `https://<user>.github.io/<repo>/`
   — for this repo, that's `https://gauravrangi.github.io/wrap_station/`

The workflow automatically passes the correct `NEXT_PUBLIC_BASE_PATH` (the
repo name with a leading slash) so all internal links and assets resolve.

### Custom domain

If you want to host at `https://wrapstationsocal.com`:

1. Add a `CNAME` file inside `public/` containing your domain (e.g. `wrapstationsocal.com`).
2. In repo Settings → Pages, add the custom domain.
3. Set `NEXT_PUBLIC_BASE_PATH=` (empty) in the workflow env so the site lives at the root.
4. Update `site.url` in `lib/site.ts` to your real domain so canonicals/OG resolve.

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
  vehicles/[slug]/     # vehicle-specific landing pages
  locations/[slug]/    # service-area landing pages
  blog/[slug]/         # blog articles
  book/                # Cal.com booking embed
  about/  contact/  gallery/  pricing/  process/  reviews/
  faq/  materials/  aftercare/  warranty/  privacy/  terms/
  not-found.tsx
components/            # Header, Footer, Cards, QuoteForm, CalEmbed, etc.
lib/
  site.ts              # business info, services, pricing, hours
  jsonld.ts            # structured-data builders
  faqs.ts              # FAQ content per service
  general-faqs.ts      # general FAQ
  posts.ts             # blog content
  testimonials.ts      # reviews
  packages.ts          # pricing packages
  locations.ts         # service-area pages
  vehicles.ts          # vehicle landing pages
  materials.ts         # film & coating brands
  gallery.ts           # gallery cards (palette + metadata)
  instagram.ts         # IG post permalinks (empty by default)
  booking.ts           # Cal.com handle
public/                # favicon, .nojekyll, future gallery photos
.github/workflows/     # GitHub Pages deploy workflow
```

## Editing content

| Want to change… | Edit |
| --- | --- |
| Address / phone / hours / service areas | `lib/site.ts` |
| Service title, price, copy or bullets | `lib/site.ts` (`services` array) |
| FAQs | `lib/faqs.ts` (per service), `lib/general-faqs.ts` (general) |
| Blog articles | `lib/posts.ts` |
| Pricing packages | `lib/packages.ts` |
| Service-area landing pages | `lib/locations.ts` |
| Vehicle landing pages | `lib/vehicles.ts` |
| Gallery cards | `lib/gallery.ts` (or replace with real photos in `app/gallery/page.tsx`) |
| Instagram embeds | Add post permalinks to `lib/instagram.ts` |
| Cal.com handle | Set `NEXT_PUBLIC_CAL_LINK` env var, or edit `lib/booking.ts` |

## Notes on static hosting

Because the site is exported as static HTML/CSS/JS:

- The quote form opens the user's email client via `mailto:` (no backend needed).
  If you want a real backend later, deploy to Vercel / Netlify Functions and
  re-introduce an API route, or wire the form to Formspree / Getform.
- Cal.com and Instagram embeds load via their official client-side scripts —
  fully compatible with static hosting.
- All images are served directly (no Next.js image optimizer); pre-size your
  photos before dropping them in `public/`.
