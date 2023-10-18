const express = require("express");
const {body} = require("express-validator");
const {handleInputErrors} = require("../middleware/middleware");
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
