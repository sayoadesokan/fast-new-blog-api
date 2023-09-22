const express = require('express');
const {
  signUp,
  createUser,
  followUser,
} = require('../controller/user-controller');
const { Authenticate } = require('../middleware/auth');

const route = express.Router();

route
  .post('/register', createUser)
  .post('/login', signUp)
  .use(Authenticate)
  .post('/follow', followUser);

module.exports = route;
