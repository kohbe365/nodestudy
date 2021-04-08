import express from "express";
import routes from "../routes";
import {
  lists,
  getUpload,
  postUpload,
  listDetail,
  editList,
  deleteList,
} from "../controllers/listController";
import { uploadVideo } from "../middlewares";

const listRouter = express.Router();

listRouter.get(routes.upload, getUpload);
listRouter.post(routes.upload,uploadVideo, postUpload);
listRouter.get(routes.listDetail(), listDetail);
listRouter.get(routes.editList, editList);
listRouter.get(routes.deleteList, deleteList);

export default listRouter;
