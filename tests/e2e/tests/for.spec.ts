import { test, expect } from '@playwright/test';

test.describe('login tests', () => {
  const users = [
    { username: 'admin', password: '123456' },
    { username: 'user1', password: 'abc123' },
  ];

  for (const u of users) {
    test(`login as ${u.username}`, async ({ page }) => {
      // await page.goto('/login');
      // await page.fill('#username', u.username);
      // await page.fill('#password', u.password);
      // await page.click('button[type=submit]');
      // await expect(page).toHaveURL('/dashboard');
    });
  }
});