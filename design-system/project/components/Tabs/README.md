# Tabs

Page tabs: shadcn `Tabs` with an underline style (2 px foreground under the active tab). Use for sections of 360 pages and for list / tab pages (Support: Tickets · Session ratings).
Counts in tabs use `count` chips.

At 375 (below 768 px): controls 44 px. Tabs are 44 px high (`max-md:h-11`). The tab row scrolls inside itself; it never makes the page wider. The active tab is always in view (scroll it into view on load), and a 32 px fade on the right edge shows that more tabs follow. Segments are 38 px in a 3 px track, so the segmented control is 44 px high.

Segmented control: shadcn `ToggleGroup` on a `muted` track. Use for the time range (24 h · 7 d · 30 d), view switch (Table / Chart) and quick filters. Not for navigation.
