const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  updatePassword,
  getProfile,
} = require("../controllers/authController");

const { authenticateToken } = require("../middleware/authMiddleware"); // Import auth middleware

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authenticateToken, logoutUser);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);
router.put("/updatepassword", authenticateToken, updatePassword);
router.get("/me", authenticateToken, getProfile);

module.exports = router;
