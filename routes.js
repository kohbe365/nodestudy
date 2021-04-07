// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos

const LISTS = "/lists";
const UPLOAD = "/upload";
const LIST_DETAIL = "/:id";
const EDIT_LIST = "/:id/edit";
const DELETE_LIST = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  lists: LISTS,
  upload: UPLOAD,
  listDetail: (id) => {
    if (id) {
      return `/lists/${id}`;
    } else {
      return LIST_DETAIL;
    }
  },
  editList: EDIT_LIST,
  deleteList: DELETE_LIST,
};

export default routes;
