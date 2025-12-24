import { test, expect } from '@playwright/test';
import { useAdminLogin } from '../utils/login'

useAdminLogin();

test('get users', async ({ page }) => {
  await page.goto('/users', { waitUntil: 'networkidle' });
  //await expect(page.getByRole('button', { name: 'Refresh' })).toBeVisible();
  const totalText = await page.getByTestId("userCount").innerText();
  await expect(Number.parseInt(totalText)).toBeGreaterThan(0);

});
