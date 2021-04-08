import routes from "../routes";
import List from "../models/List"

export const home = async(req, res) => {
try {
  const lists= await List.find({});
  //console.log(List);//objects
  //console.log(lists);//arrays
  res.render("home", { pageTitle: "Home", lists });
}catch(error){
  console.log(error);
  res.render("home", { pageTitle: "Home", lists:[] })
}
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }, //req에 받아온 query안의 term 안의 값을 searchingBy에 넣는 es6문법
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, lists });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async(req, res) => {
  const {     
    body: { title, description },
    file: { path }
} = req;
  const newVideo = await List.create({
    fileUrl: path,
    title,
    description
  });
  res.redirect(routes.listDetail(newVideo.id));
};

export const editList = (req, res) =>
  res.render("editList", { pageTitle: "Edit List" });

export const deleteList = (req, res) =>
  res.render("deleteList", { pageTitle: "Delete List" });

export const listDetail = (req, res) =>
  res.render("listDetail", { pageTitle: "List Detail" });
