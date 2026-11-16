# Sidebar

Grouped navigation from the IA (§3): Overview · Countries · Fleet · Users & Support · Analytics · System.

- Item: 32 px, icon 16, label 13.5. Active: `sidebar-accent` fill, foreground text, weight 550.
- 360 pages have no item; the list item stays active (Country 360 → Countries).
- Counts: red solid = open alerts in that area (Countries: countries below 99 %); grey = waiting items (Support tickets).
- Header: logo slot (env `APP_ICON`, no colour fill) + name (env `APP_NAME`) + "Control Center".
- Footer: build versions (panel, API, worker) in mono 11. No admin e-mail.
- Rail (768–1279): icons only, tooltip with the label, red dot for alerts, separators between groups.
