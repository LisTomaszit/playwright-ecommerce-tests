import { test, expect } from "@playwright/test";

test("Website should open and show body", async ({ page }) => {
  await page.goto("https://fakestoreapi.com/products");
  const body = page.locator("body");
  await expect(body).toBeVisible();
});

const testString = "Learn Playwright";

test("Checking filled area", async ({ page }) => {
  await page.route("**/*", async (route) => {
    await route.fulfill({
      status: 500,
      body: "Server error",
    });
  });
  await page.goto("https://demo.playwright.dev/todomvc");
  const toDoInput = page.locator(".new-todo"); // page.getByPlaceholder("What needs to be done?")
  await expect(toDoInput).toBeVisible();
  await toDoInput.fill(testString);
  await toDoInput.press("Enter");
  const todoItem = page.getByTestId("todo-title");
  await expect(todoItem).toBeVisible();
  await expect(todoItem).toContainText(testString);
});

test("complete todo", async ({ page }) => {
  await page.route("**/*", async (route) => {
    await route.fulfill({
      status: 500,
      body: "Server error",
    });
  });
  await page.goto("https://demo.playwright.dev/todomvc");

  const input = page.getByPlaceholder("What needs to be done?");
  await input.fill(testString);
  await input.press("Enter");

  const todo = page.locator("li").filter({ hasText: testString });

  const checkbox = todo.getByRole("checkbox");
  await checkbox.click();

  await expect(todo).toHaveClass(/completed/);
});
