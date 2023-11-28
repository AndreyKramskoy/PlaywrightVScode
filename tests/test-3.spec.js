import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.epam.com/');
  await expect(page.url()).toBe('https://www.epam.com/');
  await page.getByRole('button', { name: 'Search' }).hover();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('What are you looking for?').type('DevOps');
  await page.getByRole('button', { name: 'Find' }).click();
  await expect(page).toHaveTitle('Search Our Website | EPAM');
});
