const express = require("express");
const { getAllJobs, createJob } = require("../controllers/jobController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getAllJobs); // ✅ Public route
router.post("/", authMiddleware, createJob); // ✅ Protected route (Requires Login)

module.exports = router;
