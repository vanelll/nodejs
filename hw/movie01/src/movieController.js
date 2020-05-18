import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("movies", {
    pageTitle: "movies",
    movies
  });
};

export const movieDetail = (req, res) => {
  const id = req.params.id;
  const movie = getMovieById(id);
  if (id) {
    res.render("detail", {
      pageTitle: movie.title,
      movie
    });
  } else {
    res.render("404");
  }
};

export const filterMovie = (req, res) => {
  const year = req.query.year,
    rating = req.query.rating;
  if (year) {
    const movies = getMovieByMinimumYear(year);
    res.render("movies", {
      pageTitle: `filtered`,
      movies
    });
  }
  if (rating) {
    const movies = getMovieByMinimumRating(rating);
    res.render("movies", {
      pageTitle: `filtered`,
      movies
    });
  }
  res.render("404");
};
