# AppShell

Page frame for every route. Code: shadcn `SidebarProvider` + `Sidebar` + `SidebarInset`; one layout route.

| Width | Navigation | Header | Content |
|---|---|---|---|
| ≥ 1280 (frame 1440) | Sidebar 240 | crumb + "N open alerts" + EN/TR + theme + account | padding 24, 12 columns |
| 768–1279 (frame 1024) | Icon rail 60, tooltips | shorter alert button ("3"), language as icon | padding 24, 8 columns |
| < 768 (frame 375) | Drawer from "Menu" | menu, group / page, alert icon with count, account | padding 16, 4 columns |

Rule: `grid-template-columns: var(--sidebar-w) minmax(0,1fr)`. The page never scrolls sideways (VPN-704).
