const express = require("express");
const jwt = require("jsonwebtoken");

// Load environment variables from .env file
require("dotenv").config();

// INITIALIZATION

// Create an express application
const app = express();
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "127.0.0.1";

// Middleware to parse JSON
app.use(express.json());

// List of Mock Users
const users = [{ id: 1, username: "admin", password: "password" }];

// ROUTES
app.get("/", (req, res) => {
  res.send(`User Service is running on PORT ${PORT} `);
});

app.post("/login", (req, res) => {
  // Extract username and password from the request body
  const { username, password } = req.body;

  // Find the user with the given username and password
  const user = users.find(
    (user) => user.username == username && user.password == password
  );

  // If the user is not found or the password is incorrect
  if (!user) {
    return res.json(401).json({ message: "Invalid username or password" });
  }

  // Generate a JWT token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  // Send the token as response
  res.json({ token });
});

app.listen(PORT, HOST, () => {
  // Ensure it binds to 0.0.0.0
  console.log(`User Service is running on port ${PORT} and HOST ${HOST}`);
});
