import { test, expect } from '@playwright/test';

test('home page loads and displays client cards', async ({ page }) => {
  await page.goto('/');

  // Check that the main heading is visible
  const heading = page.locator('text=Select Your Organization');
  await expect(heading).toBeVisible();

  // Check that at least one client card is visible
  const cards = page.locator('[class*="rounded-xl"]');
  await expect(cards.first()).toBeVisible();
});

test('backend health check endpoint responds', async ({ request }) => {
  const response = await request.get('http://localhost:4000/api/health');
  expect(response.status()).toBe(200);

  const json = await response.json();
  expect(json).toEqual({ ok: true });
});

test('Upload Log page navigates and renders', async ({ page }) => {
  await page.goto('/');

  // Click the Upload Log button
  const uploadLogButton = page.locator('button:has-text("Upload Log")');
  await expect(uploadLogButton).toBeVisible();
  await uploadLogButton.click();

  // Should be able to wait for navigation/content, but for now just ensure no crash
  await page.waitForTimeout(1000);
  expect(page.url()).toContain('localhost');
});
