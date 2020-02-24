export const home= (req,res) => res.render("home", { pageTitle: "Home" });
export const search = (req,res)=> res.send("Search", 
{ pageTitle: "serach"});
export const videos = (req,res)=> res.send("Videos",
{ pageTitle: "videos"});
export const upload = (req,res)=> res.send("upload", {pageTitle: "upload "});
export const videoDetail = (req,res)=> res.send("videoDetail",{pageTitle: "videodtail"});
export const editVideo = (req,res)=> res.send("editVideo",{pageTitle: "editvideo"});
export const deleteVideo = (req,res)=> res.send("deleteVideo", "deletevideo");
// req,res 함수의 인자로 입력 받고 res.send("")로 리턴

//res.render -> pug

/*
res.send sends things to the user.
res.render looks into the views folder, 
takes the template, 
compiles it 
and returns the html.
*/