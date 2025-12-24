import { chromium, FullConfig } from '@playwright/test';
import { setupLogins } from "./login"

export default async function globalSetup(config: FullConfig) {
  await setupLogins();
}
