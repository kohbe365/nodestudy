export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
  const {
    query: { term: searchingBy }, //req에 받아온 query안의 term 안의 값을 searchingBy에 넣는 es6문법
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });
export const listDetail = (req, res) =>
  res.render("listDetail", { pageTitle: "listDetail" });
export const editList = (req, res) =>
  res.render("editList", { pageTitle: "editList" });
export const deleteList = (req, res) =>
  res.render("deleteList", { pageTitle: "deleteList" });
