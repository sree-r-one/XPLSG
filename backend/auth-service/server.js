require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");

const app = express();

// Add CORS
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true })); // Allow frontend to access this server
app.use(express.json()); // Body parser
app.use(cookieParser()); // Cookie parser

// Default route
app.get("/", (req, res) => {
  res.status(200).send("Auth Service running");
});

app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
