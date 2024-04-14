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

test('popup renders correctly', async () => {
  const page = await browser.newPage();
  await page.goto(`chrome-extension://${EXTENSION_ID}/popup/popup.html`);

  const heading = await page.$eval('h1', (e) => e.textContent);
  console.log("heading - ", heading);
//  const children = await list.$$('li');

  expect(heading).toBe("Cricbuzz Dark");
});
