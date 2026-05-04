export const vehicles = [
  {
    slug: "tesla-model-y",
    name: "Tesla Model Y",
    intro:
      "The most-wrapped car in our studio. We've installed every flavor of color-change and PPF on the Model Y — and we've got the patterns dialed in.",
    popularServices: [
      "Full color-change wrap (Satin Frozen Black, Gloss Burnt Orange, Gloss Khaki)",
      "Full Front PPF + ceramic coating",
      "Ceramic window tint with glass-roof package",
    ],
    note:
      "Model Y owners frequently bundle a Satin or Matte wrap with full-front PPF for a transformed look that stays protected against rock chips on the I-5 and I-15.",
    keywords: [
      "Tesla Model Y wrap",
      "Tesla Model Y PPF",
      "Tesla Model Y ceramic coating",
      "Tesla Model Y tint",
    ],
  },
  {
    slug: "tesla-model-3",
    name: "Tesla Model 3",
    intro:
      "Whether you're going for a clean OEM-plus look or a wild color flip, our Model 3 patterns deliver wrapped jambs, perfect mirror caps and zero lifted edges.",
    popularServices: [
      "Chrome delete + roof wrap",
      "Full color-change wrap",
      "Stealth (matte) PPF over factory paint",
      "Glass-roof ceramic tint",
    ],
    note:
      "The Model 3's relatively flat panels make it a fantastic candidate for color-flip and matte finishes — ask us to bring out the swatch book.",
    keywords: [
      "Tesla Model 3 wrap",
      "Tesla Model 3 PPF",
      "Tesla Model 3 ceramic coating",
      "Tesla Model 3 tint",
    ],
  },
  {
    slug: "tesla-model-s",
    name: "Tesla Model S",
    intro:
      "The Model S deserves the full-body treatment. We frequently install full-body XPEL or Stek over factory Pearl White and Solid Black to lock in resale.",
    popularServices: [
      "Full-body PPF (XPEL Ultimate Plus / Stek Dynoshield)",
      "Multi-stage paint correction + 7-year ceramic",
      "Full ceramic tint with 70% IR rejection",
    ],
    note:
      "Pair full-body PPF with a 7+ year ceramic for a finish that beads water for years and shrugs off freeway debris.",
    keywords: [
      "Tesla Model S PPF",
      "Tesla Model S wrap",
      "Tesla Model S ceramic",
      "Tesla Model S tint",
    ],
  },
  {
    slug: "bmw-m3-m4",
    name: "BMW M3 / M4",
    intro:
      "From Sao Paulo Yellow track cars to Frozen Pure Grey daily drivers, our BMW M install patterns cover every flare, vent and contour.",
    popularServices: [
      "Full Front PPF (XPEL Stealth for matte cars)",
      "Color-change wrap (Frozen Black, Nardo Grey, BRG)",
      "Wheels-off ceramic coating",
    ],
    note:
      "Already have a wrap or PPF from another shop? We do free in-person inspections to flag lifted edges, contamination or paint correction needs.",
    keywords: [
      "BMW M3 wrap",
      "BMW M4 PPF",
      "BMW M3 ceramic coating",
      "BMW wrap San Diego",
    ],
  },
  {
    slug: "mercedes-amg",
    name: "Mercedes-AMG",
    intro:
      "AMG owners trust us with G63s, GT63 4-Doors, C63s and EQS sedans. We treat each one like a flagship — because it is.",
    popularServices: [
      "Full body PPF on G-Wagen and GT models",
      "Matte Military Green and Satin Black wraps",
      "AMG carbon-trim color matching",
    ],
    note:
      "Our G63 patterns wrap the spare-tire surround, door handles and cladding — most shops skip these.",
    keywords: [
      "Mercedes AMG wrap",
      "Mercedes G63 PPF",
      "Mercedes ceramic coating",
      "AMG GT63 wrap",
    ],
  },
  {
    slug: "porsche",
    name: "Porsche",
    intro:
      "911s, Taycans, Cayennes and Macans — we install with the precision a Porsche deserves: panel-off where required, hand-trimmed edges, factory-quality finish.",
    popularServices: [
      "Full body PPF on 911 and Taycan",
      "Color-change wraps in PTS-inspired hues",
      "Wheel-off ceramic coating",
    ],
    note:
      "We coordinate with Porsche of San Diego service intervals so your install fits cleanly into your maintenance schedule.",
    keywords: [
      "Porsche 911 PPF",
      "Porsche Taycan wrap",
      "Porsche ceramic coating",
      "Porsche wrap San Diego",
    ],
  },
] as const;

export type Vehicle = (typeof vehicles)[number];
