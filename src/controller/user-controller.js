const UserService = require('../service/user-service');

const service = new UserService();
module.exports.createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await service.createUser({
      firstName,
      lastName,
      email,
      password,
    });
    return res.status(200).json({
      message: 'Success!',
      data: user,
    });
  } catch (error) {
    console.log(error);
    throw new Error('Unable to create User');
  }
};
