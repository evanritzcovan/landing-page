/**
 * ER monogram for `next/og` icons.
 * Colors are hex — Satori does not support oklch (see site `globals.css` .dark).
 */
const markColors = {
  /** oklch(0.145 0 0) — site background */
  background: "#252525",
  /** oklch(0.985 0 0) — site foreground */
  foreground: "#fafafa",
  /** oklch(1 0 0 / 10%) — site border */
  border: "rgba(255, 255, 255, 0.1)",
} as const;

export function FaviconMark({ fontSize }: { fontSize: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: markColors.background,
        border: `1px solid ${markColors.border}`,
        color: markColors.foreground,
        fontSize,
        fontWeight: 700,
        letterSpacing: "-0.08em",
        lineHeight: 1,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
      }}
    >
      ER
    </div>
  );
}
