import pkg from '/opt/node22/lib/node_modules/playwright/index.js';
const { chromium } = pkg;
import path from 'node:path';

const dir = path.dirname(new URL(import.meta.url).pathname);
const files = ['01-hook', '02-decision-engine', '03-use-cases'];

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 1200 }, deviceScaleFactor: 2 });

for (const f of files) {
  await page.goto(`file://${dir}/${f}.html`);
  await page.screenshot({ path: `${dir}/${f}.png` });
  console.log('rendered', f);
}

await browser.close();
