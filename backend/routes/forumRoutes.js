const express = require("express");
const { getAllForums, createForum } = require("../controllers/forumController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getAllForums); // ✅ Get all forums (public)
router.post("/", authMiddleware, createForum); // ✅ Create forum post (protected)

module.exports = router;
