const Sequelize = require('sequelize');
const {
  POSTGRES_DATABASE,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
} = require("../config");
const { associations } = require("./models/Associations");

const sequelize = new Sequelize(
  POSTGRES_DATABASE,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  {
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    dialect: 'postgres',
  }
);

const connection = async () => {
  try {
    associations(sequelize);
    console.log('associations created!');
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Database error:', error);
  }
};

module.exports = { sequelize, connection };
