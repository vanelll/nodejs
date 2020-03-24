import fs from "fs";


export function home(req, res){
  res.render("home", {pageTitle: "txt2html"});
}


export async function postUpload(req, res){
   const {
    file
   } = req;
    if(file){
    let text;
      text= await fs.readFileSync(file.path, 'utf8');
      res.render("upload",{text});
    }else res.status(error);

}

