The VPN Control Center is the web admin panel of both brands (`apps/vpn-control-center`). One code base serves both brands. The operator is the only day-to-day user. The panel is calm, neutral and dense: white or near-black surfaces, one near-black (or near-white) main button, colour only for status and data.

This page holds the tokens, components and states. The screens are on the canvas page (`design-canvas/project/`), built only from these parts.

## Brand and themes

- **One neutral look, plus a small brand layer** (board 2026-11-11, changed 2026-11-15). The name, the logo and the favicon come from env (`APP_NAME`, `APP_ICON`). A brand layer replaces only `primary`, `primary-hover`, `primary-foreground`, `ring` and `sidebar-accent`, and adds a Login backdrop and accent. Status, chart, surface and text tokens stay neutral and the same for both brands. The brand values are kept on a private page, not on this one. The old `vpn.*` colours and `gradient-vpn` are removed.
- **Light and dark.** The panel has a light / dark / system switch, so every token has a light and a dark value. Dark is its own set of steps, not an automatic flip.
- **Stack:** React, shadcn/ui (Radix), Tailwind 3, Recharts, lucide-react. No new UI library. `handoff/` has the values for `src/index.css` and the Tailwind extension.
- **Units:** CSS px. Frames: Desktop 1440, Tablet 1024, Mobile 375.

## Content fundamentals

- **One page = one question.** Every page shows its question in one sentence under the title ("Is anything wrong right now, and where?").
- **Every number says what it counts.** Window ("last 24 h"), sample size ("n = 4 210"), and for countries the source: **IP country**, **Store country** or **Time-zone country** (source label next to the section title; IA §4).
- **No overall connection success.** Success is measured per country. The Overview shows countries below 99 %, MENA first, each with n; Iran, Russia and China in one short line.
- **Missing is not zero.** No data yet, partial and too little data have their own looks (see States). Partial data is never shown as complete.
- **Words** (approved by the board, 2026-11-15): **Server** = physical VPN host (code: VpnServer, "node"); **List item** = one row of the app's server list (code: server-list-entry); **Load balancer** = a group of servers behind one list item. Ladder plan §4 words: rung, order, connect, connect success, first rung, lower rung, too little data, margin of error, period. Retired words are not used in the UI (node, entry, episode, transport, reach, attempt, custom order …).
- **Protocol and rung names** (IA §2.1, VPN-1215): one full and one short name each, the same in EN and TR. Full form where there is space (order editor, page text, tables at 1440); short form only where space is short (walk view, KPI labels, chips, 375). Short AmneziaWG = "AWG" + full version, no space: "AWG3.1". Current rungs: AmneziaWG 3.1 · UDP (AWG3.1 · UDP), AmneziaWG 3.1 · TCP relay (AWG3.1 · TCP relay), Xray · REALITY, OpenVPN · UDP, OpenVPN · TCP 80, WireGuard · UDP. Never a bare "REALITY", never "Wireguard". Retired generations and protocols never appear in the order editor (ladder plan §4.2).
- **Platforms:** iOS, Android and macOS. Every table of users or reports has a Platform column, and the page has a Platform filter.
- **Countries:** flag + name (`Intl.DisplayNames`, EN / TR). The ISO code only in the tooltip.
- **Voice:** short, direct, ASD-STE100 style. Sentence case for titles and buttons. Buttons say the action ("Delete server", "Save order"), never "OK". Errors say what failed and what to do next, with an error id.
- **Numbers:** tabular figures. EN: "1 284", "94.1 %". TR: `Intl.NumberFormat('tr-TR')` ("1.284", "%94,1").
- **Privacy:** no user e-mail, IP, user id, token or login in any design. Masked forms: `usr_••••91`, `•••• 7f3a`, `api-•••.example`. The operator is "OP".

## Colour

Use the `tokens.json` names. In code they are shadcn CSS variables (`--background` …) plus `--cc-*` for panel roles.

- Surfaces: `background` (page), `card` (cards, tables, chart surface), `popover` (menus, dialogs, sheets, tooltips of charts), `muted` (group rows, inset panels, tracks).
- Text: `foreground`; `muted-foreground` for secondary text and axis text (passes 4.5:1 on all surfaces); `subtle-foreground` only for placeholders, nav group labels and too-little-data values.
- Actions: `primary` for the one main button; `outline` buttons use `input` borders; `destructive` only inside a destructive confirm dialog; `ring` for focus.
- Status: `ok`, `warn`, `crit`, `info`, `neutral`, each with `-solid` (dots, bars, cells), `-fg` (text), `-bg` (fills), `-border`. A status colour never appears without an icon or a word.
- Data quality: `hatch` (partial, too little data), dashed `border-strong` (no data yet).
- Charts: `series-1…8` in fixed order, `outcome-*` for connect outcomes, `chart-*` for grid, axis, target, events, `seq-*` for heat cells.

### Contrast (WCAG, measured on the token values)

| Text | On | Light | Dark |
|---|---|---|---|
| `foreground` | `background` | 16.55 | 19.06 |
| `foreground` | `card` | 17.72 | 18.07 |
| `muted-foreground` | `background` | 5.89 | 7.76 |
| `muted-foreground` | `card` | 6.31 | 7.36 |
| `muted-foreground` | `muted` | 5.74 | 6.56 |
| `subtle-foreground` | `card` | 3.24 | 3.90 |
| `primary-foreground` | `primary` | 16.97 | 16.97 |
| `destructive-foreground` | `destructive` | 4.83 | 4.83 |
| `link` | `card` | 6.70 | 7.42 |
| `ok-fg` | `ok-bg` | 4.79 | 9.06 |
| `warn-fg` | `warn-bg` | 4.75 | 9.35 |
| `crit-fg` | `crit-bg` | 5.91 | 6.11 |
| `info-fg` | `info-bg` | 6.16 | 6.53 |
| `neutral-fg` | `neutral-bg` | 7.03 | 6.56 |
| `crit-fg` | `card` | 6.47 | 6.82 |
| `ok-fg` | `card` | 5.02 | 10.82 |
| `chart-axis` | `card` | 4.83 | 7.36 |
| `tooltip-fg` | `tooltip-bg` | 16.97 | 16.97 |
| `sidebar-foreground` | `sidebar-accent` | 8.86 | 11.11 |
| `ring` | `card` | 5.17 | 5.13 |

`subtle-foreground` is below 4.5:1 on purpose: it is used only for text that is not needed to do a task (placeholders, group labels, too-little-data values that also have a label).

## Type

Inter (variable, OFL), self-hosted from `fonts/` (latin + latin-ext for Turkish). Ten styles, named in `tokens.json` › type: `kpi` 28/32, `h1` 20/28, `h2` 16/24, `h3` 14/20, `body` 14/20, `body-strong`, `small` 13/20, `caption` 12/16, `caption-strong`, `mono` 12.5/18. Numbers in tables, KPIs and charts use tabular figures.

## Space, shape, elevation

- 4 px scale (Tailwind). Page padding 24 (1440, 1024) and 16 (375). Gap between cards 16; between page sections 20.
- Radius: `radius-sm` 4 (chips with square ends, flags), `radius-md` 6 (buttons, inputs, menus), `radius-lg` 8 (cards, tables; = shadcn `--radius`), `radius-xl` 12 (dialogs), `radius-full`.
- Shadows: `shadow-xs` (cards, inputs), `shadow-md` (menus, tooltips), `shadow-lg` (dialogs, sheets, toasts). Dark relies on borders more than shadows.
- Sizes: header 56, sidebar 240, rail 60, controls 36 / 32 / 28 (at 375: 44 for every control), table rows 44 / 36.

## Layout and breakpoints

| Frame | Range | Navigation | Grid | Tables |
|---|---|---|---|---|
| Desktop 1440 | ≥ 1280 | Sidebar 240 | 12 columns, padding 24 | Full table |
| Tablet 1024 | 768–1279 | Icon rail 60 | 8 columns, padding 24 | Scroll inside the card, sticky first column, hide low-priority columns |
| Mobile 375 | < 768 | Drawer | 4 columns, padding 16 | Stacked rows (NarrowTable) |

**VPN-704 fixes built into the parts:**
1. Page-level horizontal scroll (Overview, VPNs at 1440; Servers, Domain Health, Support at 1024): shell `minmax(0,1fr)`, `min-width: 0` on grid children, only `.tbl-wrap` and tab rows scroll sideways, long values truncate.
2. No narrow table layout at 375: `NarrowTable` (stacked rows with 4 key values).
3. The header never named the page: the crumb ends with the page name.
4. Reachability as one ~52 000 px list: lists page at 25 rows; unreachable pairs live in Country 360 and Server 360, grouped.

## Components

| Group | Cards |
|---|---|
| Foundations | Colors, Typography, SpaceRadiusElevation, Layout, ChartColors, Icons |
| Navigation | AppShell, Sidebar, Header, PageHeader, Tabs |
| Controls | Button, Forms |
| Layout | Card |
| Data display | KPITile, Chip, SourceLabel, CountryRow, Flag, Meter, AlertInbox |
| Tables | DataTable, NarrowTable, FilterBar |
| Charts | Charts, SmallCharts |
| Overlays | Overlays (menu, tooltip, toast), Dialog (dialog, sheet), ConfirmDialog |
| Ladder | LadderOrderEditor |
| States | States |

Each card has a README with the shadcn part to use, anatomy, states and rules.

### Build state

Each card names its state at the top of its preview file (`status`).

- **Live · F1** (on both panels since 2026-11-25): Colors, Typography, SpaceRadiusElevation, Layout, Icons, AppShell, Sidebar, Header, PageHeader.
- **Live · F2** (on both panels since 2026-11-25): Button, Card, Chip, ConfirmDialog, CountryRow, DataTable, NarrowTable, Dialog, Overlays, FilterBar, Forms, Flag, KPITile, Meter, Charts, ChartColors, SmallCharts, SourceLabel, States, Tabs.
- **Approved, not built:** AlertInbox (comes with F3, Overview), LadderOrderEditor (comes with F5, Country 360).

On the screens page, the rows "Live · …" hold the pages that are live (F1, F6, F7). The rows "Approved, not built · …" hold the pages of F3, F4 and F5.

## States

Every card loads and fails on its own. Looks and text rules: **States** card.
- **No data yet** for cards that wait for backend data: per-server usage (B1), users connected now / fleet snapshot (B2), traffic split free / premium and load-balancer picks (B3), uptime-breach and failure-spike alerts (B5).
- **Partial** for worker `partial: true` and for interim views (alert inbox with 3 of 5 kinds; traffic card without the free / premium split).
- **Too little data**: n < 100 connects. Grey, not ranked, sample size shown.

## Interaction

- Every number opens its rows (connects, users, servers). Row click opens the 360 page. Filters and time ranges live in the URL.
- Destructive and wide-reaching actions always have a confirm step (ConfirmDialog). The 7 actions without one today (VPN-703 §1) get it.
- Keyboard: `/` focuses search, Esc closes sheets and dialogs, Alt + ↑ / ↓ moves a rung. Focus is always visible (2 px ring).

## Assets

- `assets/Flags`: SVG flags for the countries in the designs (flag-icons, MIT; licence file included).
- `assets/Icons`: the lucide icons used on this page (ISC).
- `assets/Logos`: the logo slot. Logo, name and favicon come from env per brand; the design shows a neutral placeholder.
- `fonts/`: Inter variable woff2 (OFL; licence file included).

## Proposals (wait for the board; nobody builds them before approval)

1. **SVG flags** (flag-icons, MIT) instead of emoji flags: emoji flags show as two letters on Windows. Size: S.
2. **Inter** as the panel font (two woff2 files, ~110 kB). Without it, the system font stack keeps the same sizes. Size: S.

## Open points (P1.2)

1. API domain probe country: store or IP? Labels say "Store country *" until confirmed.
2. Countries below 99 %: which endpoint gives the daily-check rate (VPN-600 rules)?
3. Server capacity: there is no limit number; Meter shows "no limit set" until P1.2 decides.

## How this page is made

`design-system/build/` holds the source: `build.py` (tokens), `cc.css` (component CSS), `parts.py` (app shell), `charts.py` (chart SVG), `previews/` (card bodies), `readmes.md` (card READMEs). Run `python3 design-system/build/build.py`, then `node design-system/build/render.cjs 960 - design-system/project/components/*/preview.html` to set the card heights. The canvas frames use the same CSS.
