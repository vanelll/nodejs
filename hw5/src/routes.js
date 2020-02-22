/*
/
/join
/login
/confirm-account
/courses
/courses/new
/courses/mine
/api/documentation
/api/v1/buy
/api/v1/refund
/api/v2/remove
/api/v2/edit

*/

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const CONFIRM = "/confirm-account";
//courses
const COURSES = "/courses";
const NEW = "/new";
const MINE = "/mine";
//api
const API = "/api";
const DOCUMENTATION = "/documentation";

const V1 = "/api/v1";
const V1_BUY = "/buy";
const V1_REFUND = "/refund";

const V2 = "/api/v2";
const V2_REMOVE = "/remove";
const V2_EDIT = "/edit";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  confirmAccount: CONFIRM,
  courses: COURSES,
  newCourses: NEW,
  mineCourses: MINE,
  api: API,
  documentation: DOCUMENTATION,
  apiV1: V1,
  apiV1Buy: V1_BUY,
  apiV1Refund: V1_REFUND,
  apiV2: V2,
  apiV2Remove: V2_REMOVE,
  apiV2Edit: V2_EDIT
};

export default routes;
