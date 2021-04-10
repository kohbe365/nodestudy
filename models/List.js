import mongoose from "mongoose";

const ListSchema = new mongoose.Schema({
  fileUrl: {
    type: String, // fileUrl란 데이터의 데이터 형테
    required: "File URL if required", // 데이터의 형태가 충족되어지지 못했을 경우 반환하는 메세지.
  },
  title: {
    type: String,
    required: "Title is requierd",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId, //어떤 모델과 연결을 짖는 부분.
      ref: "Comment", //어느 모델과 연관이 되어있는지!
    },
  ],
});

const model = mongoose.model("List", ListSchema);

export default model;
