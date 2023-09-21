const { sequelize } = require('../database/db');
const UserRepository = require('../database/repository/user-repository');
const {
  generateSalt,
  generatePassword,
  validatePasswords,
  generateSignature,
} = require('../utils');

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
        salt,
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new Error('Unable to create user!');
    }
  }

  async signUp(userInput) {
    try {
      const { email, password } = userInput;
      const user = await this.repository.findEmail(email);

      if (user) {
        const validatePassword = await validatePasswords(
          password,
          user.password,
          user.salt
        );

        if (validatePassword) {
          const token = await generateSignature({
            id: user.id,
            email: user.email,
          });
          return { token, user };
        }
      }
    } catch (error) {
      console.log(error);
      throw new Error('Unable to create user!');
    }
  }
}

module.exports = UserService;
