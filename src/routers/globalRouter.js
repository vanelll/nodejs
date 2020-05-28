import express from "express";
import routes from "../routes";
import { home, search} from "../controllers/videoController";
import {
    getJoin
    , getLogin
    , logout
    , postJoin
    , postLogin,
    githubLogin,
    postGithubLogIn
    } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.Join, onlyPublic, getJoin);
globalRouter.post(routes.Join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home,home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

globalRouter.get(routes.github, githubLogin);
//다시,,보기,,
globalRouter.get(routes.githubCallback, passport.authentication,
    {failurlRedirect: "/login"} ,
    postGithubLogIn);

globalRouter.get(routes.me, getMe);
 

export default globalRouter;