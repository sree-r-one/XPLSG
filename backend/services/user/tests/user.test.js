const request = require("supertest");
const app = require("../src/index.js");

test("GET / should return a welcome message", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  expect(response.text).toContain("User Service is running on");
});
