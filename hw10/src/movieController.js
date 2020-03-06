/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";
import routes from "./routes";
import {} from "./movieRouter";
// Add your magic here!



export const home = async (req,res)=> {
    try{
        const movies = await Movie.find({}).sort({ _id: -1 });
        res.render("home", { pageTitle: "Home", movies });
    }catch(error){
        console.log("📺home")
        console.log(error);
        res.redirect(routes.home);
    }

};

export const detailMovie= async(req,res)=>{
    const {
        params:{id}
    }=req;

        const movie= await Movie.findById(id);
        console.log(movie);
        res.render("detail", {pageTitle: movie.title, movie});
};


/*
export const createMovie = (req,res)=>{
        return res.render("create", {pageTitle: "create"});
};

export const postMovie= async (req,res)=> {
    const {
        body: {title,year,rating
            ,synopsis,genres,uploadedAt}
    }=req;
    const movie = await Movie.create({
        title,
        year,
        rating,
        synopsis,
        genres,
        uploadedAt
    });
     console.log("🔥i did post movie");
     console.log(movie);
     res.render("detail", {pageTitle: "detail", movie});
}; 

//⛱ 장르 고쳐야 한다,,,좆같다..


export const detailMovie = async(req,res)=>{
    const {
        params: {id}
    }=req;
    const movie= await Movie.findById(id);
    res.render("detail", {pageTitle: "detail" ,movie});
   
};

export const getEditMovie =async(req,res)=>{
    const {
        params: {id}
    }=req;
    console.log(id);
    /*
    try {
        const movie = await Movie.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${movie.title}`, movie });
      } catch (error) {
        console.log("getEdit error⏰⏰⏰⏰⏰⏰");
        res.redirect("home");
      }
    };
export const postEditMovie =async(req,res)=>{
    res.render("detail");
};




export const deleteMovie = async(req,res)=>{
    res.render("home");
};

export const search = (req,res)=>{
  //  query: {term: searchingBy
  //  } =req;
};

*/