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
    defualt: 0,
  },
  createdAt: {
    type: Date,
    defualt: Date.now,
  },
});

const model = mongoose.model("List", ListSchema);

export default model;
