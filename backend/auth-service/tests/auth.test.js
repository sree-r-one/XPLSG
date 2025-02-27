const request = require("supertest");
const app = require("../server"); // Import Express app

describe("User Registration API", () => {
  let users = [];

  beforeEach(() => {
    users = [];
  });

  test("✅ Should register a new user with valid details", async () => {
    const res = await request(app).post("/auth/register").send({
      email: "testuser@example.com",
      password: "Test@123",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("message", "User registered successfully!");
  });

  test("❌ Should return 400 if email is missing", async () => {
    const res = await request(app).post("/auth/register").send({
      password: "Test@123",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty(
      "message",
      "Email and password are required"
    );
  });

  test("❌ Should return 400 if password is missing", async () => {
    const res = await request(app).post("/auth/register").send({
      email: "testuser@example.com",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty(
      "message",
      "Email and password are required"
    );
  });

  test("❌ Should return 409 if email is already registered", async () => {
    await request(app).post("/auth/register").send({
      email: "existing@example.com",
      password: "Test@123",
    });

    const res = await request(app).post("/auth/register").send({
      email: "existing@example.com",
      password: "Test@123",
    });

    expect(res.statusCode).toBe(409);
    expect(res.body).toHaveProperty("message", "User already exists");
  });
});
