# DataTable

shadcn `Table` + TanStack Table. Used by every list page.

- Header 36 px, `table-head` fill, 12/16 500 muted. Sorted column: foreground + arrow.
- Rows 44 px (dense 36 for Change history and Connects). Hover `row-hover`, selected `row-selected`.
- Numbers right-aligned, tabular. Status as chips. Countries as flag + name.
- First column sticky when the table can scroll sideways.
- Column groups name their source (IP country / Store country).
- Too-little-data rows: grey, not ranked, sort to the end.
- Every number links to its rows; row click opens the 360 page; "⋯" row menu at the end.
- Footer: selection actions left, "Rows 1–25 of 38" and paging right. 25 rows per page.
- Toolbar in the card header: Columns (show / hide), CSV.
