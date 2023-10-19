const express = require("express");
const { body, validationResult } = require("express-validator");
const {handleInputErrors} = require("../middleware/middleware");
const {
  signUp,
  createUser,
  followUser,
} = require("../controller/user-controller");
const { Authenticate } = require("../middleware/auth");

const route = express.Router();

route
  .post(
    "/register",
    body("email").exists().trim().isEmail(),
    body("password").exists().isString().trim().notEmpty(),
    body("firstName").exists().isString().trim().notEmpty(),
    handleInputErrors,
    createUser
  )
  .post(
    "/login",
    body("email").exists().trim().isEmail(),
    body("password").exists().isString().trim().notEmpty(),
    handleInputErrors,
    signUp
  )
  .use(Authenticate)
  .post(
    "/follow",
    body("firstName").exists().isString().trim().notEmpty(),
    handleInputErrors,
    followUser
  );

module.exports = route;
