export const locations = [
  {
    slug: "la-jolla",
    name: "La Jolla",
    drive: "10 minutes",
    intro:
      "Wrap Station is the trusted choice for La Jolla drivers who want their Tesla, BMW or Mercedes installed by people who treat the car the way they would.",
    landmarks: ["UCSD", "La Jolla Cove", "The Village", "Torrey Pines"],
    keywords: [
      "vinyl wrap La Jolla",
      "PPF La Jolla",
      "ceramic coating La Jolla",
      "window tint La Jolla",
    ],
  },
  {
    slug: "del-mar",
    name: "Del Mar",
    drive: "15 minutes",
    intro:
      "Just up the 5 from our Sorrento Mesa studio, Del Mar drivers consistently choose Wrap Station for high-end wraps, full-body PPF and concours-grade ceramic.",
    landmarks: ["Del Mar Racetrack", "Dog Beach", "Carmel Valley Road", "Solana Beach"],
    keywords: [
      "vinyl wrap Del Mar",
      "PPF Del Mar",
      "ceramic coating Del Mar",
      "Tesla wrap Del Mar",
    ],
  },
  {
    slug: "carmel-valley",
    name: "Carmel Valley",
    drive: "8 minutes",
    intro:
      "We're a quick drive from Carmel Valley — book in the morning and we'll have you out the door with a quote, a coffee and a clear plan for the build.",
    landmarks: ["One Paseo", "Del Mar Highlands", "Pacific Highlands Ranch"],
    keywords: [
      "vinyl wrap Carmel Valley",
      "PPF Carmel Valley",
      "Tesla wrap Carmel Valley",
      "ceramic coating Carmel Valley",
    ],
  },
  {
    slug: "encinitas",
    name: "Encinitas",
    drive: "20 minutes",
    intro:
      "Encinitas drivers come to Wrap Station for honest quotes, premium materials and a finish that holds up to the salt air and California sun.",
    landmarks: ["Moonlight Beach", "Cardiff", "Leucadia", "Olivenhain"],
    keywords: [
      "vinyl wrap Encinitas",
      "PPF Encinitas",
      "ceramic coating Encinitas",
      "Tesla PPF Encinitas",
    ],
  },
  {
    slug: "rancho-santa-fe",
    name: "Rancho Santa Fe",
    drive: "20 minutes",
    intro:
      "From Range Rovers to Lambos, Rancho Santa Fe is home to some of the most meticulous owners in the county — and many of them call Wrap Station first.",
    landmarks: ["The Covenant", "Fairbanks Ranch", "The Bridges"],
    keywords: [
      "vinyl wrap Rancho Santa Fe",
      "PPF Rancho Santa Fe",
      "ceramic coating Rancho Santa Fe",
    ],
  },
] as const;

export type Location = (typeof locations)[number];
