import { test, expect } from '@playwright/test';
import { url } from 'inspector';

test('login', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page).toHaveURL(url => url.href.includes('auth?url='));
  await expect(page.locator('input[placeholder="UserName"]')).toBeVisible();
  await expect(page.locator('input[placeholder="Password"]')).toBeVisible();
  const button = page.locator('button[type="submit"]');
  await expect(button).toBeVisible();
  await expect(button).toHaveText('Login');

  await page.locator('input[placeholder="UserName"]').fill('admin');
  await page.locator('input[placeholder="Password"]').fill('Admin123!');

  const url = page.url();
  console.log(url);
  button.click();
  //await page.waitForResponse(x=>x.url().includes("Login"));
  await page.waitForURL(x => x.href != url);
  console.log(page.url());

});
