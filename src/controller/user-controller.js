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

module.exports.signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await service.signUp({
      email,
      password,
    });
    return res.status(200).json({
      message: 'Success!',
      data: user.user,
      token: user.token,
    });
  } catch (error) {
    console.log(error);
    throw new Error('Unable to create User');
  }
};

module.exports.followUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { firstName } = req.body;
    const user = await service.followUser({
      firstName,
      UserId: id,
    });
    return res.status(200).json({
      message: 'Success!',
      data: user.user,
      token: user.token,
    });
  } catch (error) {
    console.log(error);
    throw new Error('Unable to create User');
  }
};
