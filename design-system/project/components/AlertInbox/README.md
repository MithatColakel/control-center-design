# AlertInbox

One inbox for all alerts (replaces the bell, the sidebar badge and the domain alert card). Lives on the Overview; "N open alerts" in the header opens it.

Item: severity tile (icon on `crit-bg` / `warn-bg` / `info-bg`) · title (what and where, one line) with a blue dot when new · context line (flag + country, source label, server, numbers) · actions (Open …, Acknowledge, Snooze) · time.
- Grouped items show "×N".
- Acknowledged items: 72 % opacity, tick icon, who and when ("OP · 09:12").
- Sorted by severity, then time. Tabs: Open / Acknowledged.
- **Partial** until B5: 3 of 5 alert kinds (unreachable pairs, API domain blocks, domain probe drops). The card says which kinds are missing.
