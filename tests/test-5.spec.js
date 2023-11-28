const { test: base, expect } = require('@playwright/test');

// create new instance of test with mainPage fixture
const test = base.extend({
  mainPage: async ({ page }, use) => {
    await page.goto('https://www.epam.com');
    await page.locator('#onetrust-accept-btn-handler').click();
    await use(page);
  },
});

// create fixture need to be "imported" in the test
test('open epam.com', async ({ mainPage }) => {
  await expect(mainPage).toHaveTitle(
    'EPAM | Software Engineering & Product Development Services'
  );
});
