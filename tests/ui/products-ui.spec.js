import { test, expect } from "@playwright/test";

const testString = "TestXYZ";

test("Checking filled area", async ({ page }) => {
  //   await page.route("**/*", async (route) => {
  //     await route.fulfill({
  //       status: 500,
  //       body: "Server error",
  //     });
  //   });
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
  //   await page.route("**/*", async (route) => {
  //     await route.fulfill({
  //       status: 500,
  //       body: "Server error",
  //     });
  //   });
  await page.goto("https://demo.playwright.dev/todomvc");

  const input = page.getByPlaceholder("What needs to be done?");
  await input.fill(testString);
  await input.press("Enter");

  const todo = page.locator("li").filter({ hasText: testString });

  const checkbox = todo.getByRole("checkbox");
  await checkbox.click();

  await expect(todo).toHaveClass(/completed/);
});

test("should delete todo", async ({ page }) => {
  const testString = "Learn Playwright";

  await page.goto("https://demo.playwright.dev/todomvc");

  const input = page.getByPlaceholder("What needs to be done?");
  await input.fill(testString);
  await input.press("Enter");

  const todo = page.locator("li").filter({ hasText: testString });

  await todo.hover();

  await todo.getByRole("button").click();

  await expect(todo).toHaveCount(0);
});
