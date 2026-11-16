# NarrowTable

The table layout for small widths. Fixes VPN-704 ("no narrow table layout at 375", "Servers, Domain Health, Support break at 1024").

- **Below 768 px**: each row becomes a stacked block: title line (first column + its main chip + chevron), then a 2-column list of up to 4 key values (label 11.5 muted over value 13). Paging becomes "Load more". The page defines the 4 key values per table.
- **768–1279 px**: the table keeps its columns and scrolls inside the card (`.tbl-wrap`), first column sticky, a fade on the right edge. Low-priority columns are hidden by default (Columns menu).
- The page itself never scrolls sideways.
