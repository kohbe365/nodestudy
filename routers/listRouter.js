import express from "express";
import routes from "../routes";
import {
  lists,
  getUpload,
  postUpload,
  listDetail,
  getEditList,
  postEditList,
  deleteList,
} from "../controllers/listController";
import { uploadVideo } from "../middlewares";

const listRouter = express.Router();

listRouter.get(routes.upload, getUpload);
listRouter.post(routes.upload, uploadVideo, postUpload);
listRouter.get(routes.listDetail(), listDetail); //라우트를 함수화해서 넣어줌!
listRouter.get(routes.editList(), getEditList); //라우트를 함수화해서 넣어줌!
listRouter.post(routes.editList(), postEditList);
listRouter.get(routes.deleteList(), deleteList);

export default listRouter;
