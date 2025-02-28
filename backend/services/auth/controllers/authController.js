const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = [];
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key"; // Use environment variable for the secret key

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { email, password: hashedPassword };

  users.push(newUser);

  return res.status(201).json({ message: "User registered successfully!" });
};

exports.loginUser = async (req, res) => {
  // Get user input
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = users.find((user) => user.email === email);

  // Check if the user exists
  if (!user) {
    return res.status(401).json({ message: "User Not Found" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  // Check if the password is correct

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Generate a token
  const token = jwt.sign({ email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  // Send the token to the user
  return res.status(200).json({ message: "Login successful", token });
};

exports.logoutUser = (req, res) => {
  return res.status(200).json({ message: "Logout successful" });
};

exports.forgotPassword = (req, res) => {
  res.status(200).send("Forgot password");
};

exports.resetPassword = (req, res) => {
  res.status(200).send("Reset password");
};

exports.updatePassword = (req, res) => {
  res.status(200).send("Update password");
};

exports.getProfile = (req, res) => {
  // res.status(200).send("Profile Route");
  res.status(200).json({ message: "Profile Route is here" });
};
