import { test, expect } from "@playwright/test";

test("Website should open and show body", async ({ page }) => {
  await page.goto("https://fakestoreapi.com/products");
  const body = page.locator("body");
  await expect(body).toBeVisible();
});
