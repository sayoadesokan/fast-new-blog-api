const ContactService = require('../service/contactinfo-service');

const service = new ContactService();

module.exports.registerContact = async (req, res, next) => {
  try {
    const { phone } = req.body;
    const { id } = req.user;
    const contact = await service.registerContact({ phone, UserId: id });
    res.status(200).json({
      message: 'Success!',
      data: contact,
    });
  } catch (error) {
    console.log(error);
    throw new Error('Error registering contact');
  }
};
