const express = require("express");
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/middleware";
const { Authenticate } = require("../middleware/auth");
const { createBlog } = require("../controller/blog-controller");
const route = express.Router();

route
  .use(Authenticate)
  .post(
    "/create",
    body("title").trim().isString().notEmpty().withMessage("Title is required"),
    body("description")
      .trim()
      .isString()
      .notEmpty()
      .withMessage("Title is required"),
    handleInputErrors,
    createBlog
  );

module.exports = route;
