const Forum = require("../models/Forum");

// ✅ Get all forum posts
const getAllForums = async (req, res) => {
  try {
    const forums = await Forum.find().populate("createdBy", "name email");
    res.status(200).json(forums);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// ✅ Create a new forum post
const createForum = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newForum = new Forum({
      title,
      description,
      createdBy: req.user.id, // Assuming the user is authenticated
    });
    await newForum.save();
    res.status(201).json(newForum);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

module.exports = {
  getAllForums,
  createForum,
};
