const express = require('express');
const { connection } = require('./database/db');
const { PORT } = require('./config');
const expressApp = require('./utils/express-app');
const app = express();

const startServer = async () => {
  try {
    await connection();
    await expressApp(app);
    app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
