const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');
const userRouter = require('../routes/user-route');

module.exports = async (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    cors({
      origin: '*',
    })
  );

  app.use(helmet());
  app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);
  const apiRequestLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 100,
    message: 'Your limit exceeded',
  });
  app.use(apiRequestLimiter);

  app.use('/v1/user', userRouter);
};
