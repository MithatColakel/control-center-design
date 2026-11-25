# Forms

shadcn `Input`, `Select`, `Combobox` (Popover + cmdk `Command`), `Switch`, `Checkbox`, `RadioGroup`, `Textarea`, `Label`, `Form` (react-hook-form + zod).

- Label above the field (13/16, 500). Help text under it (12 muted). Error text replaces help text, starts with an icon, says how to fix ("Write a number from 10 to 10 000.").
- States: default, focus (ring border + 3 px `ring-soft` halo), error (`crit-solid` border + `crit-soft` halo), disabled (50 %, `muted` fill).
- Country picker: flag + name, MENA group first, then Other; search in EN and TR names, ISO code shown small on the right. MENA is the 18 countries of the board list (`MENA_CODES`). Iran, Russia and China are not in MENA (board rule 2026-11-02): in the picker they are in Other (IA §11).
- Secrets and keys are always masked (`•••• 7f3a`). Never show a full token, user id, e-mail or IP.
- Switch: on = `primary`. "Always on" switches are disabled and say why.
