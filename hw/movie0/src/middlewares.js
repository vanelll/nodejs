export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "movies";
  next();
};
