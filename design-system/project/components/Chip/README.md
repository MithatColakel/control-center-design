# Chip

Small labelled state. Code: shadcn `Badge` with variants `ok`, `warn`, `crit`, `info`, `neutral`, `partial`, `nodata`, `count`.

- A status chip always has a dot or an icon and a word. Colour is never the only signal.
- Server status words: Up, Degraded, Down, Updating, Maintenance, Off.
- Data quality: **Partial** (hatched), **No data yet** (dashed, circle-dashed icon), **Too little data · n = 38** (neutral, sigma icon).
- Effect of an order change (Ladder glossary 4.1 #16): Better, Worse, No clear difference, Too early · ~N h.
- `count` chips sit in tabs and nav. Solid red count = open alerts only.
- Square chips (`radius-sm`) are roles, not states: Backup, Premium.
