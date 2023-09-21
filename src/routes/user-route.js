const express = require('express');
const { signUp, createUser } = require('../controller/user-controller');
const route = express.Router();

route.post('/register', createUser).post('/login', signUp);

module.exports = route;
