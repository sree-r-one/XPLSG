const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../server");
const User = require("../models/User");

let mongoServer;

// ✅ Set up MongoDB Memory Server before running tests
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterEach(async () => {
  await User.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("User Registration API", () => {
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

describe("User Login API", () => {
  test("✅ Should login a user with valid credentials", async () => {
    await request(app).post("/auth/register").send({
      email: "testuser@example.com",
      password: "Test@123",
    });

    const res = await request(app).post("/auth/login").send({
      email: "testuser@example.com",
      password: "Test@123",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Login successful");
    expect(res.body).toHaveProperty("token");
  });

  test("❌ Should return 400 if email is missing", async () => {
    const res = await request(app).post("/auth/login").send({
      password: "Test@123",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty(
      "message",
      "Email and password are required"
    );
  });

  test("❌ Should return 400 if password is missing", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "testuser@example.com",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty(
      "message",
      "Email and password are required"
    );
  });

  test("❌ Should return 401 if email is not registered", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "nonexistent@example.com",
      password: "Test@123",
    });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message", "User Not Found");
  });

  test("❌ Should return 401 if password is incorrect", async () => {
    await request(app).post("/auth/register").send({
      email: "testuser@example.com",
      password: "Test@123",
    });

    const res = await request(app).post("/auth/login").send({
      email: "testuser@example.com",
      password: "WrongPassword",
    });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message", "Invalid email or password");
  });
});

describe("User Profile API", () => {
  test("✅ Should return user profile when authenticated", async () => {
    await request(app).post("/auth/register").send({
      email: "profileuser@example.com",
      password: "Test@123",
    });

    const loginRes = await request(app).post("/auth/login").send({
      email: "profileuser@example.com",
      password: "Test@123",
    });

    const token = loginRes.body.token;

    const res = await request(app)
      .get("/auth/me")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("email", "profileuser@example.com");
  });

  test("❌ Should return 403 if no token is provided", async () => {
    const res = await request(app).get("/auth/me");

    expect(res.statusCode).toBe(403);
    expect(res.body).toHaveProperty(
      "message",
      "Access Denied, no token provided"
    );
  });

  test("❌ Should return 401 if invalid token is provided", async () => {
    const res = await request(app)
      .get("/auth/me")
      .set("Authorization", "Bearer invalid_token");

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message", "Invalid or expired token");
  });
});
describe("User Logout API", () => {
  test("✅ Should logout a user", async () => {
    await request(app).post("/auth/register").send({
      email: "logoutuser@example.com",
      password: "Test@123",
    });

    const loginRes = await request(app).post("/auth/login").send({
      email: "logoutuser@example.com",
      password: "Test@123",
    });

    const token = loginRes.body.token;

    const res = await request(app)
      .post("/auth/logout")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Logout successful");
  });

  test("❌ Should return 403 if no token is provided", async () => {
    const res = await request(app).post("/auth/logout");

    expect(res.statusCode).toBe(403);
    expect(res.body).toHaveProperty(
      "message",
      "Access Denied, no token provided"
    );
  });
});
