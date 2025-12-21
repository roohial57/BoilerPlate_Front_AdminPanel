import { test, expect } from '@playwright/test';

test.use({ storageState: 'storage/admin.json' });

test('get users', async ({ page }) => {
  await page.goto('/users', { waitUntil: 'networkidle' });
  expect(page.getByRole('button', { name: 'Refresh' })).toBeVisible();
  // await expect(page).toHaveURL(url => url.href.includes('auth?url='));
  // await expect(page.locator('input[placeholder="UserName"]')).toBeVisible();
  // await expect(page.locator('input[placeholder="Password"]')).toBeVisible();
  // const button = page.locator('button[type="submit"]');
  // await expect(button).toBeVisible();
  // await expect(button).toHaveText('Login');

  // await page.locator('input[placeholder="UserName"]').fill('admin');
  // await page.locator('input[placeholder="Password"]').fill('Admin123!');

  // button.click();
  // await expect(page).toHaveURL(url => !url.href.includes('auth?url='));
});
