const ContactInfo = require('../models/ContactInfo');

class ContactRepository {
  constructor(sequelize) {
    ContactInfo(sequelize);
    this.client = sequelize;
    this.model = sequelize.models;
  }

  async registerContact(userInput) {
    try {
      const { phone, UserId } = userInput;
      const contact = await this.model.ContactInfo.create({
        phone,
        UserId,
      });

      return contact;
    } catch (error) {
      console.error(error);
      throw new Error('Unable to save user to the database');
    }
  }
}

module.exports = ContactRepository;
