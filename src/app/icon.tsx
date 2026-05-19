import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          borderRadius: 8,
          background:
            "linear-gradient(145deg, oklch(0.42 0.12 264), oklch(0.28 0.08 264))",
          color: "oklch(0.98 0 0)",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        E
      </div>
    ),
    { ...size }
  );
}
