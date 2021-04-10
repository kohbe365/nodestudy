import routes from "../routes";
import List from "../models/List";

export const home = async (req, res) => {
  try {
    const lists = await List.find({}).sort({ _id: -1 });
    //console.log(List);//objects
    //console.log(lists);//arrays
    res.render("home", { pageTitle: "Home", lists });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", lists: [] });
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

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await List.create({
    fileUrl: path,
    title,
    description,
  });
  res.redirect(routes.listDetail(newVideo.id));
};
export const listDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const list = await List.findById(id); // mongoose에서 아이디에대한 정보를 가져오는 api
    console.log(list);
    res.render("listDetail", { pageTitle: list.title, list });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const getEditList = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const list = await List.findById(id);
    res.render("editList", { pageTitle: `Edit ${list.title}`, list }); //응답으로 페이지 타이틀과 list 파일을 통째로 전송하고 있다.
  } catch (error) {
    console.log(error);
    res.redirect("home");
  }
};
export const postEditList = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await List.findOneAndUpdate({ _id: id }, { title, description }); //여기서 _id:id 로 안하면 적용불가.. 오브젝트 id 값은 _id 로 표현 되기 때문 ..
    res.redirect(routes.listDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect("home");
  }
};

export const deleteList = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await List.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
