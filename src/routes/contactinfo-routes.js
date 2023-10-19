const express = require("express");
const { registerContact } = require("../controller/contactinfo-controller");
const { Authenticate } = require("../middleware/auth");
const { handleInputErrors } = require("../middleware/middleware");
const route = express.Router();
const {body} = require("express-validator");

route
  .use(Authenticate)
  .post(
    "/create",
    body("phone").trim().isString().notEmpty().withMessage("Phone is required"),
    handleInputErrors,
    registerContact
  );

module.exports = route;
