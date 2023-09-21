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
      const { firstName, lastName, email, hashPassword } = userInput;
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
}

module.exports = UserRepository;
