const { verify } = require("../utils/jwt");
const User = require("../db/database").User;

const auth = async (req, res, next) => {
  const token = req.cookies["access-token"];

  if (!token)
    return res.status(401).send("authorization denied, user need to login");

  const userInfo = await verify(token);
  if (!userInfo)
    return res.status(401).send("authorization denied, user need to login");

  const user = await User.findOne({ where: { id: userInfo.id } });

  if (!user)
    return res
      .status(401)
      .send("authorization denied,  user doesn't exist in the database");
  req.user = user;
  next();
};

module.exports = auth;
