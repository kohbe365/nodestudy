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
    type: mongoose.Schema.Types.ObjectId, //어떤 모델과 연결을 짖는 부분.
    ref: "List",  //어느 모델과 연관이 되어있는지!
  },
});

const model = mongoose.model("Comment", CommentSchema);

export default model;