const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../server");
const User = require("../models/User");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterEach(async () => {
  await User.deleteMany(); // Clear database between tests
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

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

describe("User Login API", () => {
  let users = [];

  beforeEach(() => {
    users = [];
  });

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

describe("User Logout API", () => {
  test("✅ Should logout a user", async () => {
    const res = await request(app).post("/auth/logout");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Logout successful");
  });
});
