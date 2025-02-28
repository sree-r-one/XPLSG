const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res
      .status(403)
      .json({ message: "Access Denied, no token provided" });
  }

  const token = authHeader.replace("Bearer ", ""); // ✅ Remove "Bearer " prefix

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.user = decoded; // ✅ Attach decoded JWT payload to `req.user`
    next(); // ✅ Continue to next middleware
  });
};
