const mongoose = require("mongoose");

const forumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the user who created the forum post
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Forum", forumSchema);
