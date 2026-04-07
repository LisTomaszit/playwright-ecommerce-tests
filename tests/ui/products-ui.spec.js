import { test, expect } from "@playwright/test";

test("Website should open and show body", async ({ page }) => {
  await page.goto("https://fakestoreapi.com/products");
  const body = page.locator("body");
  await expect(body).toBeVisible();
});

const testString = "Learn Playwright";

test("Checking filled area", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");
  const toDoInput = page.locator(".new-todo"); // page.getByPlaceholder("What needs to be done?")
  await expect(toDoInput).toBeVisible();
  await toDoInput.fill(testString);
  await toDoInput.press("Enter");
  const todoItem = page.getByTestId("todo-title");
  await expect(todoItem).toBeVisible();
  await expect(todoItem).toContainText(testString);
});
