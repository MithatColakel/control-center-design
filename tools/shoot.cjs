// Render the images the viewer shows on the canvas. Run after tools/build_data.py.
//   PLAYWRIGHT_BROWSERS_PATH=... node tools/shoot.cjs [levels]
// levels: micro (0.15x), thumb (0.5x), full (1x), ds (Design System cards at 960 px). Default: all.
const { chromium } = require(process.env.PW || '/usr/lib/node_modules/playwright');
const fs = require('fs'), path = require('path');
const ROOT = path.dirname(__dirname);
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'viewer/data.json'), 'utf8'));
const want = new Set((process.argv[2] || 'micro,thumb,full,ds').split(','));
const LEVELS = [['micro', 0.15, 70], ['thumb', 0.5, 72], ['full', 1, 84]];

async function pool(items, k, fn) {
  let i = 0;
  await Promise.all(Array.from({ length: k }, async (_, w) => { while (i < items.length) { const it = items[i++]; await fn(it, w); } }));
}
async function shoot(page, file, w, h, out, q) {
  await page.setViewportSize({ width: w, height: h });
  await page.goto('file://' + path.join(ROOT, file), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out, type: 'jpeg', quality: q });
  return page.evaluate(() => document.documentElement.scrollWidth);
}

(async () => {
  const browser = await chromium.launch();
  const wide = [];
  for (const [dir, dsf, q] of LEVELS) {
    if (!want.has(dir)) continue;
    fs.mkdirSync(path.join(ROOT, 'shots', dir), { recursive: true });
    const ctx = await browser.newContext({ deviceScaleFactor: dsf });
    const pages = await Promise.all([0, 1, 2, 3].map(() => ctx.newPage()));
    await pool(data.boards, 4, async (b, w) => {
      const sw = await shoot(pages[w], b.file, b.w, b.h, path.join(ROOT, 'shots', dir, b.id + '.jpg'), q);
      if (sw > b.w) wide.push(b.id);
    });
    await ctx.close();
    console.log(`${dir}: ${data.boards.length} boards`);
  }
  if (want.has('ds')) {
    fs.mkdirSync(path.join(ROOT, 'shots/ds'), { recursive: true });
    const ctx = await browser.newContext({ deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    const cards = data.ds.groups.flatMap(g => g.cards);
    for (const c of cards) await shoot(page, c.file, c.w, c.h, path.join(ROOT, 'shots/ds', c.id + '.jpg'), 84);
    console.log(`ds: ${cards.length} cards`);
  }
  await browser.close();
  if (wide.length) { console.log('WIDER than the board (page-level sideways scroll):', [...new Set(wide)].join(', ')); process.exitCode = 2; }
})().catch(e => { console.error(e); process.exit(1); });
