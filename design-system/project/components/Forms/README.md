# Forms

shadcn `Input`, `Select`, `Combobox` (Popover + cmdk `Command`), `Switch`, `Checkbox`, `RadioGroup`, `Textarea`, `Label`, `Form` (react-hook-form + zod).

- Label above the field (13/16, 500). Help text under it (12 muted). Error text replaces help text, starts with an icon, says how to fix ("Write a number from 10 to 10 000.").
- States: default, focus (ring border + 3 px `ring-soft` halo), error (`crit-solid` border + `crit-soft` halo), disabled (50 %, `muted` fill).
- Country picker: flag + name, MENA group first, search in EN and TR names, ISO code shown small on the right.
- Secrets and keys are always masked (`•••• 7f3a`). Never show a full token, user id, e-mail or IP.
- Switch: on = `primary`. "Always on" switches are disabled and say why.
