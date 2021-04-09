import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/lists/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "S_O_WeToDo";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const uploadVideo = multerVideo.single("file"); // single 은 한 파일만 받겠다는 뜻
