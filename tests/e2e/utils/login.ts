import { Page, test } from "@playwright/test";
import config from '../playwright.config';

const adminUsername = 'admin';
const adminPassword = 'Admin123!';
const adminStoragePath = 'storage/admin.json';


export async function login(page: Page, username = adminUsername, password = adminPassword) {
  const baseURL = config.use?.baseURL as string;
  await page.goto(baseURL);
  await page.waitForSelector('input[placeholder="Username"]');
  await page.locator('input[placeholder="Username"]').fill(username);
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