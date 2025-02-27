const bcrypt = require("bcrypt");
const users = [];

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

exports.loginUser = (req, res) => {
  res.status(200).send("Login user");
};

exports.logoutUser = (req, res) => {
  res.status(200).send("Logout user");
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
  res.status(200).send("Profile Route");
};
