const HOME = "/";
const ADD = "/add";
const DETAIL = "/:id";

const routes = {
  home: HOME,
  add: ADD,
  detail: id => {
    if (id) {
      return `/${id}`;
    } else {
      return DETAIL;
    }
  }
};

export default routes;
