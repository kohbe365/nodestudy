import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    defualt: Date.now,
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
  },
});
