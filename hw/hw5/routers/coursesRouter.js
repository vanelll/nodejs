import express from "express";
import routes from "../src/routes";
import {
  newCourses,
  mineCourses,
  courses
} from "../controllers/coursesController";

const coursesRouter = express.Router();

coursesRouter.get("/", courses);
coursesRouter.get(routes.newCourses, newCourses);
coursesRouter.get(routes.mineCourses, mineCourses);

export default coursesRouter;
