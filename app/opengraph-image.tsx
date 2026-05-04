import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Premium Vinyl Wraps, PPF & Ceramic in San Diego`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "72px",
          justifyContent: "space-between",
          backgroundColor: "#08090b",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(225,29,42,0.45), transparent 55%)",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#e11d2a",
              fontWeight: 800,
              fontSize: 22,
              marginRight: 16,
            }}
          >
            WS
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
            Wrap Station
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: -2,
              maxWidth: 980,
              marginBottom: 18,
            }}
          >
            Premium vinyl wraps, PPF & ceramic for San Diego.
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#cfd2d6" }}>
            Tesla • BMW • Mercedes • Sorrento Mesa Studio
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
