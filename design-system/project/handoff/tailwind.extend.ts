// VPN Control Center — Tailwind theme.extend additions (tailwind.config.ts).
// Keeps the shadcn colours; adds status, chart and panel roles from handoff/index.css.
// Remove the old `vpn` brand colours and `gradient-vpn` (the brand layer replaces only primary, ring and sidebar-accent, board 2026-11-15).
export const ccTheme = {
  fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"] },
  colors: {
    ok:   { DEFAULT: "var(--cc-ok-solid)",   fg: "var(--cc-ok-fg)",   bg: "var(--cc-ok-bg)",   border: "var(--cc-ok-border)" },
    warn: { DEFAULT: "var(--cc-warn-solid)", fg: "var(--cc-warn-fg)", bg: "var(--cc-warn-bg)", border: "var(--cc-warn-border)" },
    crit: { DEFAULT: "var(--cc-crit-solid)", fg: "var(--cc-crit-fg)", bg: "var(--cc-crit-bg)", border: "var(--cc-crit-border)" },
    info: { DEFAULT: "var(--cc-info-solid)", fg: "var(--cc-info-fg)", bg: "var(--cc-info-bg)", border: "var(--cc-info-border)" },
    neutral: { DEFAULT: "var(--cc-neutral-solid)", fg: "var(--cc-neutral-fg)", bg: "var(--cc-neutral-bg)", border: "var(--cc-neutral-border)" },
    subtle: "var(--cc-subtle-foreground)",
    chart: { grid: "var(--cc-chart-grid)", axis: "var(--cc-chart-axis)", target: "var(--cc-chart-target)", event: "var(--cc-chart-event)",
      1: "var(--cc-series-1)", 2: "var(--cc-series-2)", 3: "var(--cc-series-3)", 4: "var(--cc-series-4)",
      5: "var(--cc-series-5)", 6: "var(--cc-series-6)", 7: "var(--cc-series-7)", 8: "var(--cc-series-8)" },
  },
  screens: { "2xl": "1440px" },
  height: { header: "56px" },
  width: { sidebar: "240px", rail: "60px" },
};
