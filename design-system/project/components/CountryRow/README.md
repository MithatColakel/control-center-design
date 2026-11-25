# CountryRow

The "Countries below 99 %" list (Overview, Countries). Board rules: MENA first, each country with its sample size; IR, RU, CN in one short line; never one overall success rate.

Row: flag + name · rate (tabular, red < 97 %, amber 97–99 %) · meter on a 90–100 % scale with a tick at 99 % · "n = …".
Groups: MENA, then Other (`hgroup` header). Too little data (n < 100): grey, hatched meter, not ranked, at the end of its group.
Source label on the card: IP country + Daily check (VPN-600 rules). P1.2 decides the endpoint.

**Overview variant** (as the approved frames `Desktop-Overview-Default` and `Mobile-Overview-Default`; the card samples use the frames' own code, so they cannot drift apart):
- Card description: "Connect success per country, last 24 h. Line on each bar = 99 %." At 1440 "All countries →" is in the card header, at 375 in the card foot.
- Group head with the count: "MENA · 4 of 18 below 99 %" (18 = the board's MENA list, `MENA_CODES`), "Other · 2 below 99 %".
- Too little data (n < 100) has no row on the Overview. One line at the end of its group: "Σ Too little data, not ranked: Bahrain n = 14 · Yemen n = 9" (flag, name, n for each country).
- Watch list line under the list: Iran, Russia and China, always (also at or above 99 %), each with its rate and its n. Whole percent ("61 %").
- Watch rate colour: red (`crit-fg`) below 97 %, amber (`warn-fg`) 97–99 %, normal text at 99 % or more, grey (`subtle-foreground`) with "too little" when n < 100. The colour comes from the exact rate, not from the rounded number: 96.96 % shows "97 %" and is red.
- At 375 (below 768 px): the label "Watch list" on its own line, the three countries in one row that does not wrap, and their n on one muted line under it ("n = 1 240 · 880 · 95 (China: too little)").
- No country below 99 %: the empty state "No country below 99 %" says how many countries were checked and names the too-little ones with n; the watch line stays.

Where the old card and the approved frames did not agree, the frames win (VPN-1215): (1) too little data is a Σ line on the Overview, not a hatched row; (2) the group head has the count; (3) each watch country has its n, not only the small one; (4) watch rates have the red / amber / grey colour; (5) watch rates are whole percent, also at 1440; (6) the card description.
