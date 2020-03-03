
import axios from "axios";
let movies = [];
const YIFY_URL = "";
const client = axios.create({
  baseURL: 
});
const startDB = async () => {
  try {
    console.log("⏳  Starting Movie DB");
    ({
      data: {
        data: { movies }
      }
    } = await client.get("/list_movies.json", { params: { limit: 50 } }));
    console.log("✅ ");
  } catch (e) {
    console.log(e.message);
    console.log("❌ ");
  }
};
startDB();

// This gives you an array of all the movies
export const getMovies = () => movies;

// This gives you one movie, don't forget to pass the ID
export const getMovieById = id => {
  if (!id) {
    throw Error("❌  ID   ");
  }
  return movies.find(m => m.id === parseInt(id, 10));
};

// This gives you an array of movies with a release date of minimum X
export const getMovieByMinimumYear = year => {
  if (!year) {
    throw Error(" YEAR ❌");
  }
  return movies.filter(m => m.year >= year);
};

// This gives you an array of movies with a rating of minimum X
export const getMovieByMinimumRating = rating => {
  if (!rating) {
    throw Error("RATING ❌");
  }
  return movies.filter(m => m.rating >= rating);
};
