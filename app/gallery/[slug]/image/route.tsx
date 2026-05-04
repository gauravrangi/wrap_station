import { ImageResponse } from "next/og";
import { galleryItems } from "@/lib/gallery";

export const runtime = "edge";

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const item = galleryItems.find((g) => g.slug === params.slug);
  if (!item) return new Response("Not found", { status: 404 });

  const [from, to] = item.palette;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 56,
          background: `radial-gradient(circle at 30% 25%, ${to}, ${from})`,
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "#e11d2a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 14,
            }}
          >
            WS
          </div>
          <div
            style={{
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#cfd2d6",
            }}
          >
            {item.service}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "30%",
            width: 600,
            height: 280,
            borderRadius: 220,
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.18), transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#e11d2a",
            }}
          >
            Wrap Station
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1.5, lineHeight: 1.05 }}>
            {item.title}
          </div>
          <div style={{ fontSize: 22, color: "#cfd2d6" }}>{item.vehicle}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 900 }
  );
}
