import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    editVideo,
    deleteVideo,
    postEditVideo
} from "../controllers/videoController";
import { onlyPrivate } from "../middlewares";

const videoRouter = express.Router();


videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.get(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(),  onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(),  onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(),  onlyPrivate, deleteVideo);

export default videoRouter;


//register video view
export const postRegisterView= async(req,res)=> {
    const{
        params: { id }
    }= req;
    try{
        const video= await Video.findById(id);
        video.views += 1;
        video.save();
        res.status(200);
    }catch(error){
        res.status(400);
        res.end();
    }finally{
        res.end();
    }
}