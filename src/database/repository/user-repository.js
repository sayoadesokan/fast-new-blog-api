const User = require('../models/User');

class UserRepository {
  constructor(sequelize) {
    User(sequelize);
    this.client = sequelize;
    this.model = sequelize.models;
  }

  async findEmail(email) {
    try {
      const user = await this.model.User.findOne({
        where: {
          email,
        },
      });

      return user;
    } catch (error) {
      console.error(error);
      throw new Error('Email does not exist!');
    }
  }

  async createUser(userInput) {
    try {
      const { firstName, lastName, email, hashPassword, salt } = userInput;
      const user = await this.model.User.create({
        firstName,
        lastName,
        email,
        password: hashPassword,
        salt,
      });
      return user;
    } catch (error) {
      console.error(error);
      throw new Error('Unable to save user to the database');
    }
  }

  async followUser(userInput) {
    try {
      const { firstName, UserId } = userInput;
      const currentUser = await this.model.User.findByPk(UserId);
      const userToFollow = await this.model.User.findOne({
        where: {
          firstName,
        },
      });
      currentUser.addUser(userToFollow); //this is an inbuilt sequelize function that makes you "add a user", makes many to many relationship easier (check docs)
      return currentUser.getUser();
    } catch (error) {
      console.error(error);
      throw new Error('Unable to follow user');
    }
  }
}

module.exports = UserRepository;
