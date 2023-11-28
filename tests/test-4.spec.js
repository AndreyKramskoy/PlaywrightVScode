import { test, expect } from '@playwright/test';

test('open epam.com', async ({ page }) => {
  await page.goto('https://www.epam.com');
  await expect(page).toHaveTitle(
    'EPAM | Software Engineering & Product Development Services'
  );
});
