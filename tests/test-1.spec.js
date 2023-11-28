import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.pause();
  await page.goto('https://www.epam.com/');
  await expect(page.url()).toBe('https://www.epam.com/');
  await page.locator('.hamburger-menu-ui').click();
  await page.getByLabel('Insights').click();
  await page.getByRole('link', { name: 'Cybersecurity Insights' }).click();
  await expect(page).toHaveTitle('Cybersecurity Insights | EPAM');
  await page.getByRole('link', { name: 'EPAM CONTINUUM' }).click();
  await page.getByRole('tab', { name: 'Strategy' }).getByRole('img').click();
  await page.getByRole('link', { name: 'LEARN MORE', exact: true }).click();
  await page.getByText('You want an advantage in the marketplace.').click();
  await expect(page).toHaveTitle('Strategy Services | EPAM');
});
