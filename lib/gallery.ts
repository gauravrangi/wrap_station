export type GalleryItem = {
  slug: string;
  title: string;
  vehicle: string;
  service: "Vinyl Wrap" | "PPF" | "Ceramic" | "Window Tint";
  /** Hex pair: [from, to] for the rendered card gradient. */
  palette: [string, string];
  /** Short caption shown on hover / detail. */
  caption: string;
};

export const galleryItems: GalleryItem[] = [
  {
    slug: "model-y-satin-frozen-black",
    title: "Satin Frozen Black",
    vehicle: "2024 Tesla Model Y Performance",
    service: "Vinyl Wrap",
    palette: ["#0c0d10", "#1f2229"],
    caption: "Full color-change wrap + 5-year ceramic on the wrap.",
  },
  {
    slug: "m4-stealth-ppf",
    title: "Stealth PPF",
    vehicle: "2023 BMW M4 Competition",
    service: "PPF",
    palette: ["#15171c", "#3a3f4a"],
    caption: "Full body XPEL Stealth converts gloss to satin and protects every panel.",
  },
  {
    slug: "g63-military-green",
    title: "Matte Military Green",
    vehicle: "2024 Mercedes-AMG G63",
    service: "Vinyl Wrap",
    palette: ["#22302a", "#475a4d"],
    caption: "KPMF matte green over black, with chrome delete and wrap-around door cladding.",
  },
  {
    slug: "model-3-burnt-orange",
    title: "Gloss Burnt Orange",
    vehicle: "2024 Tesla Model 3",
    service: "Vinyl Wrap",
    palette: ["#3a1d10", "#c45a23"],
    caption: "3M 2080 Gloss Burnt Orange — dramatic against San Diego sunsets.",
  },
  {
    slug: "porsche-911-dynoshield",
    title: "Stek Dynoshield",
    vehicle: "2023 Porsche 911 Carrera S",
    service: "PPF",
    palette: ["#0e1620", "#3a4d68"],
    caption: "Full body Stek Dynoshield with hand-trimmed bumper edges.",
  },
  {
    slug: "rs6-nardo-grey",
    title: "Nardo Grey",
    vehicle: "2024 Audi RS6 Avant",
    service: "Vinyl Wrap",
    palette: ["#3a3e44", "#7a7f87"],
    caption: "Inozetek Super Gloss Nardo Grey + Avery satin black accents.",
  },
  {
    slug: "model-s-ceramic-tint",
    title: "Ceramic Tint Package",
    vehicle: "2024 Tesla Model S Plaid",
    service: "Window Tint",
    palette: ["#10161e", "#283344"],
    caption: "Cabin + glass-roof XPEL Prime XR for 88% IR rejection.",
  },
  {
    slug: "i7-pearl-white",
    title: "Satin Pearl White",
    vehicle: "2024 BMW i7",
    service: "Vinyl Wrap",
    palette: ["#aeb0b3", "#e6e7ea"],
    caption: "Avery SW900 Satin Pearl over factory Black Sapphire.",
  },
  {
    slug: "lucid-air-fullbody",
    title: "Full-Body XPEL",
    vehicle: "2024 Lucid Air Grand Touring",
    service: "PPF",
    palette: ["#1f2937", "#4b5563"],
    caption: "Every painted panel covered with XPEL Ultimate Plus, 10-year warranty.",
  },
];
