const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const forumRoutes = require("./routes/forumRoutes");

console.log("authRoutes:", authRoutes);
console.log("jobRoutes:", jobRoutes);
console.log("forumRoutes:", forumRoutes);

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes Middleware
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/forum", forumRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
