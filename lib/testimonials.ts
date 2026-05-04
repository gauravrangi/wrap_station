export const testimonials = [
  {
    name: "Marcus L.",
    vehicle: "2024 Tesla Model Y Performance",
    rating: 5,
    quote:
      "Took my Model Y in for a full satin black wrap and ceramic coating. The team's prep work was unreal — every panel came off, every edge wrapped, zero shortcuts. The car looks like it left the factory this way.",
    service: "Vinyl Wrap + Ceramic",
    date: "2026-03-14",
  },
  {
    name: "Priya S.",
    vehicle: "2023 BMW M3 Competition",
    rating: 5,
    quote:
      "Wrap Station did full XPEL Stealth PPF on my M3. The matte finish is flawless and the install is invisible. Already came back for ceramic on the wheels.",
    service: "PPF + Ceramic",
    date: "2026-02-02",
  },
  {
    name: "Daniel K.",
    vehicle: "2022 Mercedes-AMG GT 63",
    rating: 5,
    quote:
      "I priced this work at four other shops in San Diego. Wrap Station was the only one that talked materials, warranty and edges instead of just throwing a number at me. Worth every dollar.",
    service: "Full Front PPF + Ceramic",
    date: "2026-01-21",
  },
  {
    name: "Alana R.",
    vehicle: "2024 Tesla Model 3",
    rating: 5,
    quote:
      "Did the full ceramic tint package including the glass roof. The interior is noticeably cooler in the afternoon and the car looks so much cleaner from outside.",
    service: "Ceramic Window Tint",
    date: "2025-12-08",
  },
  {
    name: "Jordan T.",
    vehicle: "2023 Porsche 911 Carrera S",
    rating: 5,
    quote:
      "Trusted them with my 911 for full body PPF. The team treated it like a museum piece. Communicative, on time, no surprises.",
    service: "Full Body PPF",
    date: "2025-11-15",
  },
  {
    name: "Rebecca M.",
    vehicle: "2024 BMW iX",
    rating: 5,
    quote:
      "Easily the cleanest install I've seen in San Diego. The pearl white wrap absolutely transformed the car and the price was exactly what they quoted.",
    service: "Full Color-Change Wrap",
    date: "2025-10-09",
  },
] as const;

export const aggregateRating = {
  value: 5.0,
  count: testimonials.length,
};
