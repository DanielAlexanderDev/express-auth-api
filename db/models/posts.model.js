import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const PostModel = mongoose.model("Post", PostSchema);
