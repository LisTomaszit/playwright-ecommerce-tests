import { test, expect } from "@playwright/test";

test.skip("GET products should return list of products", async ({
  request,
}) => {
  const response = await request.get("https://fakestoreapi.com/products", {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);
});

test.skip("Get products should return valid product structure", async ({
  request,
}) => {
  const response = await request.get("https://fakestoreapi.com/products", {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(Array.isArray(body)).toBe(true);
  const product = body[0];
  //   expect(body[0]).toHaveProperty("title");
  expect(product).toHaveProperty("title");
  expect(typeof product.title).toBe("string");
  expect(typeof product.price).toBe("number");
  expect(product.price).toBeGreaterThan(0);
  expect(product).toHaveProperty("category");
});

test.skip("GET invalid endpoint should return 404", async ({ request }) => {
  const response = await request.get("https://fakestoreapi.com/invalid", {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Content-Type": "application/json",
    },
  });

  expect(response.status()).toBe(404);
});

test.skip("POST cart should create new cart", async ({ request }) => {
  const response = await request.post("https://fakestoreapi.com/carts", {
    data: {
      userId: 1,
      date: "2026-04-07",
      products: [{ productId: 1, quantity: 1 }],
    },
  });

  //   expect(response.status()).toBe(200);
  expect([200, 201]).toContain(response.status());

  const body = await response.json();
  expect(body).toHaveProperty("id");
  expect(body.userId).toBe(1);
});
