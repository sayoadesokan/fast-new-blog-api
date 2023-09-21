const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'prod') {
  const configFile = `./.env`;
  dotenv.config({ path: configFile });
} else {
  dotenv.config();
}

module.exports = {
  PORT: process.env.PORT,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  APP_SECRET: process.env.APP_SECRET,
};
