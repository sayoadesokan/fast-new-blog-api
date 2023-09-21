const { sequelize } = require('../database/db');
const ContactRepository = require('../database/repository/contactinfo-repository');

class ContactService {
  constructor() {
    this.respository = new ContactRepository(sequelize);
  }

  async registerContact(userInput) {
    try {
      const { phone } = userInput;
      const contact = await this.respository.registerContact(phone);
      return contact;
    } catch (error) {
      console.log(error);
      throw new Error('Unable to create user!');
    }
  }
}

module.exports = ContactService;
