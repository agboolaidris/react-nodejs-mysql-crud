const jwt = require("jsonwebtoken");

exports.sign = (user) => {
  return jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET);
};
