import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import globalRouter from "./routers/globalRouter";
import { localsMiddleware } from "./middlewares";
import morgan from "morgan";
import routes from "./routes";
import helmet from "helmet";
import userRouter from "./routers/userRouter";
import listRouter from "./routers/listRouter";

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.set("view engine", "pug");
app.use("/uploads",express.static("uploads"))

// 쿠키파셀 쓰면 무한로딩 걸림 ㅡㅡ 왜이럼 app.use(cookieParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware); //전역적으로 쓸 수 있는 변수..

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.lists, listRouter);

export default app;
