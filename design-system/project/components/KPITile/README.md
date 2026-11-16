# KPITile

One number with its context. Code: `Card` + content; value uses `t-kpi` (28/32, tabular).

Anatomy: label (13 muted, optional source label) → value + unit ("of 38", "/ 5") → footer (delta vs a named base, sample size, sparkline).

- The delta says its base: "vs yesterday", "vs 7-day mean". Colour follows meaning, not direction: more countries below 99 % is red (`up-bad`).
- `alert` variant: 3 px red edge when the tile needs action (countries below 99 % > 0).
- States: loading (skeleton), no data yet (dashed border, "—", names the missing data: "needs B2"), partial (chip + what is missing), too little data (grey value, n shown), error ("Not loaded · Retry").
- Overview strip (IA §5.4): Countries below 99 %, Servers up, Users connected now (no data yet until B2), Users with a connect · 24 h, Open tickets, Session rating. **No overall connection success tile.**
