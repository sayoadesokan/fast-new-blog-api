const { validateSignature } = require('../utils/index');

module.exports.Authenticate = async (req, res, next) => {
  try {
    const validate = await validateSignature(req);
    if (validate) {
      next();
    } else {
      return res.json({ message: 'User not authorized' });
    }
  } catch (error) {
    console.log(error);
    next();
  }
};
