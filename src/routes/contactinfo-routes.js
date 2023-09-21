const express = require('express');
const { registerContact } = require('../controller/contactinfo-controller');
const { Authenticate } = require('../middleware/auth');
const route = express.Router();

route.use(Authenticate).post('/create', registerContact);

module.exports = route;
