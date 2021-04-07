import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
// export const lists = [
//   {
//     id: 123123,
//     title: "List awesome1",
//     description: "This is something goog",
//     views: 24,
//     listFile:
//       "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creator: {
//       id: 7789,
//       name: "nico",
//       email: "jump@naver.com",
//     },
//   },
//   {
//     id: 123456,
//     title: "List awesome2",
//     description: "This is something goog",
//     views: 24,
//     listFile: "https//archive.org/details/BigBuckBunny_124",
//     creator: {
//       id: 7789,
//       name: "nico",
//       email: "jump@naver.com",
//     },
//   },
//   {
//     id: 123789,
//     title: "List awesome3",
//     description: "This is something goog",
//     views: 24,
//     listFile: "https//archive.org/details/BigBuckBunny_124",
//     creator: {
//       id: 7789,
//       name: "nico",
//       email: "jump@naver.com",
//     },
//   },
// ];
