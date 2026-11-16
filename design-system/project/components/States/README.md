# States

Every card and page has these states. Other cards keep working when one fails.

| State | Look | Text rule |
|---|---|---|
| Loading | Skeleton in the shape of the content | No spinner for whole pages |
| Error | Red icon, title, cause, error id, Retry | Say what failed and what to do |
| No data yet | Dashed border, `circle-dashed` icon, "—" for values | Name the missing data and the slice that brings it (B1, B2, B3, B5). Never 0 |
| Partial | Amber banner on top + hatched "Partial" chip | Say what is missing ("3 of 5 alert kinds") |
| Too little data | Grey value, hatched neutral meter, n shown | Not ranked, not red or amber; n < 100 connects |
| Empty | Green tick icon, calm text | Say that it was checked, and when |
| Empty search | Search icon, the query, "Clear filters" | Repeat the query and the filters |
