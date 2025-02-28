const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const users = [];
const User = require("../models/User");
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key"; // Use environment variable for the secret key

exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // const existingUser = users.find((user) => user.email === email);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // const user = users.find((user) => user.email === email);
    const user = await User.findOne({ email });

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
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
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
