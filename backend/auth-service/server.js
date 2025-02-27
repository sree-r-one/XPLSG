require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// Add CORS
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true })); // Allow frontend to access this server
app.use(express.json()); // Body parser
app.use(cookieParser()); // Cookie parser

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
