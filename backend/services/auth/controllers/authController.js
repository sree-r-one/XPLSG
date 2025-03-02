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
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User Not Found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email }, // ✅ Ensure `id` is included in token
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

exports.logoutUser = (req, res) => {
  if (!req.user) {
    return res
      .status(403)
      .json({ message: "Access Denied, no token provided" });
  }

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

exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id || req.user._id; // ✅ Handle both `id` and `_id`

    if (!userId) {
      return res.status(400).json({ message: "Invalid user token" });
    }

    const user = await User.findById(userId).select("-password"); // Exclude password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ email: user.email, id: user._id }); // ✅ Return user email and id
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

exports.googleAuth = async (req, res) => {
  try {
    // Get googleID and email from the request body
    const { email, googleId } = req.body;

    // Validate the googleID and email
    if (!email || !googleId) {
      return res.status(400).json({ message: "Google Authentication failed" });
    }

    // Check if the user exists in the database
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email, googleId });
      await user.save();
    }

    // If the user exists, generate a token and send it to the user
    // const token = jwt.sign({ id: user.__id, email: user.email }, SECRET_KEY, {
    //   expiresIn: "1h",
    // });

    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    // return response

    return res
      .status(200)
      .json({ message: "Google authentication successful", token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Google authentication failed", error: error.message });
  }
};
