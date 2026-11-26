# SourceLabel

Says which country a section counts. Board rule: every country section names its source.

| Label | Icon | Meaning (tooltip) |
|---|---|---|
| IP country | `map-pin` | Where the user's IP address is. Used by the daily check, Countries IP group, Country 360 › Connect outcomes, unreachable pairs. |
| Store country | `store` | App store or device language country, not the user's location. Used by the connection order, users per country. |
| Time-zone country (TR Saat dilimi ülkesi; short: Time zone / Saat dilimi) | `clock` | The country of the device's time zone. Not the IP country and not the store country. For display only. Used by User 360 › Logins (IA §2.2, §4). Approved 2026-11-26, not built yet. |
| Store country * | `store`, dashed | Source not confirmed yet (API domain probes, P1.2). |

Also used for other sources: `clock` time window ("Last 24 h"), `database` data source ("Daily check"). The time window and the time-zone country share the `clock` icon; the text tells them apart.

Place: right after the card or section title, and on table column groups. Never inside a single cell.
