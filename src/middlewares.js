import routes from "./routes";
import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";


const multerVideo = multer({dest: "uploads/videos/"});

export const localMiddleware=(req,res,next) =>{
    res.locals.siteName= 'wetube';
    res.locals.routes= routes;
    res.locals.loggedUser=req.user || null;
    next();
};

export const onlyPublic= (req,res,next) =>{
    if(req.user){
        res.redirect(routes.home);
    }else{
        next();
    }
}

export const onlyPrivate= (req,res,next) =>{
    if(req.user){
        next();
    }else{
        res.redirec(routes.home);
    }
}

export const uploadVideo= multerVideo.single("videoFile");