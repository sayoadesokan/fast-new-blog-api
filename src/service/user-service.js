const { sequelize } = require('../database/db');
const UserRepository = require('../database/repository/user-repository');
const { generateSalt, generatePassword } = require('../utils');

class UserService {
  constructor() {
    this.repository = new UserRepository(sequelize);
  }

  async createUser(userInput) {
    try {
      const { firstName, lastName, email, password } = userInput;
      const validateEmail = await this.repository.findEmail(email);

      if (validateEmail) {
        throw new Error('User already exist');
      }
      const salt = await generateSalt();
      const hashPassword = await generatePassword(password, salt);
      const user = await this.repository.createUser({
        firstName,
        lastName,
        email,
        hashPassword,
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new Error('Unable to create user!');
    }
  }
}

module.exports = UserService;
