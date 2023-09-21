const express = require('express');
const { createUser } = require('../controller/user-controller');
const route = express.Router();

route.post('/create', createUser);

module.exports = route;
