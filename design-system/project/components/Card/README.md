# Card

Container for one answer. Code: shadcn `Card` (`CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`).

Header, left to right: title (h3) → source label → (right side) time range → "⋯" menu. Description under the title in 13 px muted: what is counted and the window.
Footer: sample size or freshness on the left; the drill-down link on the right ("Open connects →"). Every number in a card opens its rows.

Variants: default (border + `shadow-xs`), flat (no shadow, inside sheets and dialogs), inset (`muted` fill, for notes and evidence).

Each card loads and fails on its own (see States). A card never shows 0 for missing data.
