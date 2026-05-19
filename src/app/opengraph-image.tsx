import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          background:
            "linear-gradient(165deg, oklch(0.18 0.03 264) 0%, oklch(0.12 0.02 264) 55%, oklch(0.1 0.01 264) 100%)",
          color: "oklch(0.98 0 0)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 55% at 50% -10%, oklch(0.38 0.1 264 / 0.45), transparent 65%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <p
            style={{
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "oklch(0.72 0 0)",
              margin: 0,
            }}
          >
            Portfolio
          </p>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: 0,
              maxWidth: 900,
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "oklch(0.78 0 0)",
              margin: 0,
              maxWidth: 820,
            }}
          >
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
