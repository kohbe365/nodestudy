import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "S_O_WeToDo";
  res.locals.routes = routes;
  next();
};
