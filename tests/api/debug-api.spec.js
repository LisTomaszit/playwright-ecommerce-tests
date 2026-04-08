import { test } from "@playwright/test";

test("Debug API in browser", async ({ page }) => {
  await page.goto("https://fakestoreapi.com/products");

  await page.waitForTimeout(5000);
});
