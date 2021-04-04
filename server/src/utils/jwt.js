const jwt = require("jsonwebtoken");

exports.sign = (user) => {
  return jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET);
};

exports.verify = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
