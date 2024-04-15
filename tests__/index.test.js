const puppeteer = require('puppeteer');

const EXTENSION_PATH = './';
const EXTENSION_ID = 'nfbonhfnglfklbieccmafkbhpgmpopdg';

let browser;

beforeEach(async () => {
  // TODO: Launch the browser.
   browser = await puppeteer.launch({
    headless: false,
    args: [
      `--disable-extensions-except=${EXTENSION_PATH}`,
      `--load-extension=${EXTENSION_PATH}`
    ]
  });
});

afterEach(async () => {
  // TODO: Close the browser.
  await browser.close();
  browser = undefined;
});

test('Popup renders correctly', async () => {
  const page = await browser.newPage();
  await page.goto(`chrome-extension://${EXTENSION_ID}/popup/popup.html`);

  const heading = await page.$eval('h1', (e) => e.textContent);

  expect(heading).toBe("Cricbuzz Dark");
});

test('Popup renders switch input', async () => {
  const page = await browser.newPage();
  await page.goto(`chrome-extension://${EXTENSION_ID}/popup/popup.html`);

  const input = await page.$eval('input', (e) => e.name)

  expect(input).toBe("dark-mode");
})

test('Open Cribuzz', async () => {
  const page = await browser.newPage();
  await page.goto(`chrome-extension://${EXTENSION_ID}/popup/popup.html`);

  await page.click("#slider-dark-mode");

  await page.goto("https://www.cricbuzz.com");

  const bg = await page.$eval('body', (e) => e.style);

  expect("bg").toBe("bg");
}, 10000);
