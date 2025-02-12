const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "127.0.0.1";

app.use(express.json());

const users = [{ id: 1, username: "admin", password: "password" }];

app.get("/", (req, res) => {
  res.send(`User Service is running on PORT ${PORT}`);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username == username && user.password == password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

// ✅ Always export `app` so Jest can import it
module.exports = app;

// ✅ Start server only if not in test mode
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, HOST, () => {
    console.log(`User Service is running on ${HOST}:${PORT}`);
  });
}
