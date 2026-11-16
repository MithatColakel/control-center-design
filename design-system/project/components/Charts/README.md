# Charts

Recharts with the panel tokens. Rules (dataviz method):
- One y-axis. Two measures → two charts.
- Lines 2 px, markers 5 px radius with a 2 px card-colour ring, direct labels at the line end + legend under the chart.
- Grid dashed 3 3 in `chart-grid`, axis text 11 px `chart-axis`. Target line dashed 5 4 in `chart-target` with a label.
- Ladder marks: thin dashed `chart-event` line + short label (order change, app release).
- Stacked bars: 2 px gap between segments, 4 px rounded top only. Connect outcomes use the reserved outcome colours (first rung, lower rung, API not reachable, no tunnel).
- Partial periods (today) are hatched and labelled.
- Hover: crosshair + tooltip card (`popover`) listing every series with its value. Text in text colours.
- Every chart has a Table view with the same numbers.
- Charts use `ResponsiveContainer` and the card width; they never set the page width.
