import { Page, test } from "@playwright/test";

const adminUsername = 'admin';
const adminPassword = 'Admin123!';
const adminStoragePath = 'tests/e2e/storage/admin.json';


export async function login(page: Page, username = adminUsername, password = adminPassword) {
  await page.goto('http://localhost:5173');
  await page.locator('input[placeholder="UserName"]').fill(username);
  await page.locator('input[placeholder="Password"]').fill(password);
  page.locator('button[type="submit"]').click();
  await page.waitForNavigation();
}

export async function setupLogin(storagePath: string, username: string, password: string) {
  const { chromium } = require('@playwright/test');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await login(page, username, password);
  await page.context().storageState({ path: storagePath });
  await browser.close();
}

export async function setupLogins() {
  await setupLogin(adminStoragePath, adminUsername, adminPassword)
}

export function useAdminLogin() {
  test.use({ storageState: adminStoragePath });
}