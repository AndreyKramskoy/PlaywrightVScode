const { test, expect } = require('@playwright/test');

test.describe('Clients', () => {
  const userName = 'Test_user';

  test.beforeAll(async ({ request }) => {
    await request.post('https://api-application.com/client', {
      data: JSON.stringify({
        name: userName,
      }),
    });
  });

  test.afterAll(async ({ request }) => {
    await request.delete('https://api-application.com/client', {
      data: JSON.stringify({
        name: userName,
      }),
    });
  });

  test('make sure a new user is visible on the Clients page', async ({
    page,
    request,
  }) => {
    const apiResponse = await request.get(
      `https://api-application.com/client/${userName}`
    );
    const userDataBuffer = await apiResponse.body();
    const userData = JSON.stringify(userDataBuffer.toString('utf-8'));

    await page.goto();
    await expect(page.locator('#user_name')).toHaveText(userData.userName);
    await expect(page.locator('#user_id')).toHaveText(userData.id);
  });
});
