const {validationResult} = require("express-validator");

module.exports.handleInputErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    res.end();
    return;
  } else {
    next();
  }
};
