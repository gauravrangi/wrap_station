import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08090b",
          900: "#0c0d10",
          800: "#15171c",
          700: "#1f2229",
          600: "#2a2e37",
        },
        accent: {
          DEFAULT: "#e11d2a",
          soft: "#ff5566",
          deep: "#9a121b",
        },
        chrome: "#cfd2d6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-spot":
          "radial-gradient(circle at 50% 0%, rgba(225,29,42,0.18), transparent 60%)",
        "carbon":
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 6px)",
      },
    },
  },
  plugins: [],
};

export default config;
