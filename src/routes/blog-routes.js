const express = require('express');
const { Authenticate } = require('../middleware/auth');
const { createBlog } = require('../controller/blog-controller');
const route = express.Router();

route.use(Authenticate).post('/create', createBlog);

module.exports = route;
