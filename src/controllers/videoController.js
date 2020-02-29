import {videos} from "../db";
import routes  from "../routes"

export const home= (req,res) => {
    res.render("home", { pageTitle: "Home" ,videos})
};

export const search = (req,res)=> {
    const {
        query :
        { term : searchingBy}
    } =req;
    res.render("search",{pageTitle: "serach", searchingBy});

export const videos = (req,res)=> 
    res.send("Videos",{ pageTitle: "videos"});
export const getUpload = (req,res)=> 
    res.send("upload", {pageTitle: "upload "});

export const postUpload = (req,res) => {
    const {
        body :{ file,title,description } 
    } = req;
};

export const videoDetail = (req,res)=> 
    res.send("videoDetail",{pageTitle: "videodtail"});
export const editVideo = (req,res)=> 
    res.send("editVideo",{pageTitle: "editvideo"});
export const deleteVideo = (req,res)=> 
    res.send("deleteVideo", "deletevideo");
// req,res 함수의 인자로 입력 받고 res.send("")로 리턴

//res.render -> pug

/*
res.send sends things to the user.
res.render looks into the views folder, 
takes the template, 
compiles it 
and returns the html.
*/