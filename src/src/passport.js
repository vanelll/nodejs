import passport from "passport";
import FacebookStrategy from "passport-facebook";
import GithubStrategy from "passport-github";
import User from "./models/User";
import { githubLoginCallback, facebookLoginCallback } from "./controllers/userController";

passport.use(User.createStrategy());

passport.use(
    new GithubStrategy(
        {
        clientID: process.env.GH_ID,
        clientSecret:process.env.GH_SECRET,
        callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
    )   
);

passport.user(
    new FacebookStrategy(
    {
        clientID: process.env.FB_ID,
        clientSecret:process.env.FB_SECRET,
        callbackURL: `http://localhost:4000${
            routes.facebookCallback}`
            , profileFields:['id','displayName','photos','email'],
            scope:['public_profile','email']
    },
   
    facebookLoginCallback

    //모든게 잘 돌아갈 때 실행됨
    )   
);


passport.serializeUser(User.serializeUser());
passport.deserializeUser(user.deserializeUser());