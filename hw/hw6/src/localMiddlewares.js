export const localMiddlewares = (req, res, next) => {
    res.locals.siteName = "middleware";
    next();
  };
  