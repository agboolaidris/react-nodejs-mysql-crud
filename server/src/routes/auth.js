const Router = require("express").Router();
const User = require("../db/database").User;
const { sign } = require("../utils/jwt");

Router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) return res.status(400).json({ msg: "Email already exist" });
    const response = await User.create({
      name,
      email,
      password,
    });
    res.json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

Router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ msg: "invalid email address" });

    if (user.password !== password)
      return res.status(400).json({ msg: "password not match" });

    const token = await sign(user);

    res.cookie("access-token", token).json({ msg: "user login" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = Router;
