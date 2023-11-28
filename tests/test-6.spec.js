import EPAMPage from '../EPAMPage';
const base = require('@playwright/test');

const test = base.test.extend({
  EPAMPage: async ({ page }, use) => {
    await page.goto('https://www.epam.com/');
    await use(new EPAMPage(page));
  },
});

test('Verify that user is to search fon EPAM main page', async ({
  EPAMPage,
}) => {
  await EPAMPage.search('Test Automation');
});
