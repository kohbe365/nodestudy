import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", lists });
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy }, //req에 받아온 query안의 term 안의 값을 searchingBy에 넣는 es6문법
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, lists });
};
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.listDetail(123123));
};
export const editList = (req, res) =>
  res.render("editList", { pageTitle: "Edit List" });
export const deleteList = (req, res) =>
  res.render("deleteList", { pageTitle: "Delete List" });
export const listDetail = (req, res) =>
  res.render("listDetail", { pageTitle: "List Detail" });
