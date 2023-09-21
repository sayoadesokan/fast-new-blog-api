const express = require('express');
const { Authenticate } = require('../middleware/auth');
const route = express.Router();

route.use(Authenticate).post('/create', registerContact);

module.exports = route;
