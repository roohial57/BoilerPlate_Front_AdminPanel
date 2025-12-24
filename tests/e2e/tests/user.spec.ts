import { test, expect } from '@playwright/test';

test.use({ storageState: 'storage/admin.json' });

test('get users', async ({ page }) => {
  await page.goto('/users', { waitUntil: 'networkidle' });
  await expect(page.getByRole('button', { name: 'Refresh' })).toBeVisible();
  const totalText = await page.getByTestId("userCount").innerText();
  await expect(Number.parseInt(totalText)).toBeGreaterThan(0);

});
