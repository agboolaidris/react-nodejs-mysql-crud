const Router = require("express").Router();
const User = require("../db/database").User;

Router.get("/:id", async (req, res) => {
  try {
    const data = await User.findByPk(req.params.id);
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

Router.get("/", async (req, res) => {
  try {
    let data = null;

    if (req.query.name) {
      data = await User.findAll({ where: { name: req.query.name } });
    } else if (req.query.id) {
      data = await User.findByPk(req.query.id, {
        attributes: ["name", "email"],
      });
    } else {
      data = await User.findAll({ attributes: ["name", "email"], limit: 2 });
    }

    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

Router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;

    const data = await User.create({ name, email, password });
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

Router.get("/count/:id", async (req, res) => {
  try {
    const { count, rows } = await User.findAndCountAll({
      where: { email: req.params.id },
      attributes: ["name", "email"],
    });

    res.json({
      count,
      rows,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = Router;
