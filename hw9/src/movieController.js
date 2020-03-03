import { getMovieById, getMovies, movieAdd, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
export const getMovie = (req, res) => {
  res.render("add");
};


export const postMovie = (req, res) => {
  const {
    body: { title: t, synopsis: s, genres: g }
  } = req;
  const arr = g.split(",");
  const movie = {
    title: t,
    synopsis: s,
    genres: arr
  };
  console.log(movie);
  addMovie(movie);
  res.redirect("/");
};
