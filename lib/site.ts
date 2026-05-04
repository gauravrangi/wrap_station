export const site = {
  name: "Wrap Station",
  legalName: "Wrap Station SoCal",
  tagline: "Premium vinyl wraps, ceramic coatings, PPF & window tint in San Diego.",
  description:
    "San Diego's go-to studio for Tesla, BMW and Mercedes owners. Color-change vinyl wraps, paint protection film (PPF), ceramic coatings and precision window tint — installed by certified pros at our Sorrento Mesa shop.",
  url: "https://wrapstationsocal.com",
  email: "info@wrapstationsocal.com",
  phone: "+18584052330",
  phoneDisplay: "(858) 405-2330",
  instagram: "https://www.instagram.com/wrapstationsocal/",
  instagramHandle: "@wrapstationsocal",
  address: {
    street: "8736 Production Ave Suite C",
    locality: "San Diego",
    region: "CA",
    postal: "92121",
    country: "US",
  },
  geo: { lat: 32.8966, lng: -117.2018 },
  hours: [
    { d: "Mon", o: "09:00", c: "18:00" },
    { d: "Tue", o: "09:00", c: "18:00" },
    { d: "Wed", o: "09:00", c: "18:00" },
    { d: "Thu", o: "09:00", c: "18:00" },
    { d: "Fri", o: "09:00", c: "18:00" },
    { d: "Sat", o: "10:00", c: "16:00" },
  ],
  serviceAreas: [
    "San Diego",
    "La Jolla",
    "Del Mar",
    "Encinitas",
    "Carmel Valley",
    "Sorrento Valley",
    "Rancho Santa Fe",
    "Poway",
    "Carlsbad",
  ],
} as const;

export const services = [
  {
    slug: "vinyl-wrap",
    title: "Vinyl Wrap",
    short: "Color-change wraps in matte, satin, gloss, chrome and PPF-grade vinyl.",
    priceFrom: 3000,
    priceTo: 3500,
    priceLabel: "$3,000 – $3,500",
    keywords: [
      "vinyl wrap San Diego",
      "Tesla wrap San Diego",
      "color change wrap",
      "satin black wrap",
      "matte wrap",
    ],
    intro:
      "Transform your car's color, finish and presence in days — not weeks. We install premium cast vinyl from 3M, Avery Dennison and KPMF with full panel-off attention to detail.",
    bullets: [
      "Full color-change wraps for Tesla Model S/3/X/Y, BMW M-Series and Mercedes AMG",
      "Matte, satin, gloss, chrome, color-flip and textured carbon options",
      "Edge-wrapped on every removable panel for a factory-quality finish",
      "Up to 7-year manufacturer warranty on premium cast films",
    ],
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    short: "9H ceramic coatings that lock in gloss and repel water, dirt and UV.",
    priceFrom: 600,
    priceTo: 1200,
    priceLabel: "$600 – $1,200",
    keywords: [
      "ceramic coating San Diego",
      "Tesla ceramic coating",
      "9H coating",
      "paint protection",
    ],
    intro:
      "A professionally applied ceramic coating bonds to your clear coat to deliver years of hydrophobic protection, deeper gloss and easier washing.",
    bullets: [
      "Multi-stage paint correction before coating",
      "Choice of 2, 5 or 7+ year ceramic systems",
      "Hydrophobic, UV-resistant, chemical-resistant finish",
      "Optional coatings for wheels, glass, trim and interior",
    ],
  },
  {
    slug: "window-tint",
    title: "Window Tint",
    short: "Heat-rejecting ceramic and carbon window tint with a lifetime warranty.",
    priceFrom: 450,
    priceTo: 1200,
    priceLabel: "$450 – $1,200",
    keywords: [
      "window tint San Diego",
      "ceramic tint",
      "Tesla window tint",
      "heat rejection tint",
    ],
    intro:
      "Stay cooler, protect your interior and elevate the look of your car with precision-cut ceramic or carbon window film.",
    bullets: [
      "Computer-cut for a perfect, edge-to-edge fit",
      "Carbon and ceramic films with up to 99% UV rejection",
      "Optional Tesla glass roof tint to cut interior heat",
      "Lifetime warranty against bubbling, peeling and fading",
    ],
  },
  {
    slug: "ppf",
    title: "Paint Protection Film (PPF)",
    short: "Self-healing clear bras and full-body PPF that shield paint from rock chips.",
    priceFrom: 1750,
    priceTo: 7000,
    priceLabel: "$1,750 – $7,000",
    keywords: [
      "PPF San Diego",
      "paint protection film",
      "Tesla PPF",
      "clear bra San Diego",
      "XPEL Stek PPF",
    ],
    intro:
      "Invisible armor for your paint. Our PPF installs use precision plotter patterns and hand-trimmed edges for a virtually undetectable finish.",
    bullets: [
      "Partial front, full front and full-body coverage options",
      "Self-healing topcoat removes light swirls with heat",
      "Gloss, matte and color-PPF options available",
      "10-year manufacturer warranty on premium films",
    ],
  },
] as const;

export type Service = (typeof services)[number];
