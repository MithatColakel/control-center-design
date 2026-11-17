# Button

The panel's button. One primary button per view.

Code: shadcn `Button` (`src/components/ui/button.tsx`), variants `default` (= primary), `outline`, `secondary`, `ghost`, `destructive`, `link`. Add size `xs` (h-7, text-xs).

| Variant | Use |
|---|---|
| primary | The one main action of the page, card or dialog: "Save order", "Add server". |
| outline | Other actions in page headers and card headers: "Export CSV", "Rolling update…". |
| secondary | "Cancel" when the dialog has no other secondary button. |
| ghost | Icon buttons, row actions, "Acknowledge" in the inbox. |
| destructive-outline | The entry point of a destructive action ("Delete server…"). The label ends with "…": it opens a confirm step. |
| destructive (fill) | Only the confirm button inside a destructive confirm dialog. |
| link | "See connects ↗", "All countries →" (leaves the current view). |

States: hover (`primary-hover` / `accent`), focus (2 px `ring`, offset 2), loading (spinner before the label, label stays, button disabled), disabled (opacity 0.5, no tooltip needed if the reason is shown next to it).

Sizes: default 36 px, `sm` 32 px (page and card headers, filter bar), `xs` 28 px (inside table rows and inbox items), `icon` 36 / 32 square. At 375 (below 768 px): controls 44 px. Every size is 44 px high (`max-md:h-11`) and icon buttons are 44 × 44 (`max-md:h-11 max-md:w-11`). Header buttons (menu, alerts, account) keep a 32 px look inside a 44 × 44 tap area. In a dialog footer the buttons share the footer width.
