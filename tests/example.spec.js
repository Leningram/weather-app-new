// @ts-check
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.locator('text=Найти').click();
  await expect(page).toHaveTitle(/Getting started/);
});
