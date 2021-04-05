const Router = require("express").Router();
const db = require("../db/database");
const auth = require("../middleware/auth");

//findByPk
Router.get("/all", [auth], async (req, res) => {
  try {
    const data = await db.User.findAll({ include: [db.Todo] });
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

Router.get("/yyyyy", async (req, res) => {
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

//findAndCountAll
Router.get("/count/:id", async (req, res) => {
  try {
    const { count, rows } = await User.findAndCountAll({
      where: { name: req.params.id },
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

//findOrCreate
Router.post("/create/:id", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const data = await User.findOrCreate({
      where: { id: req.params.id },
      defaults: { name, email, password },
    });
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//update
Router.patch("/:id", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findByPk(req.params.id);

    user.name = name ? name : user.name;
    user.email = email ? email : user.email;
    user.password = password ? password : user.password;
    const response = await user.save();
    res.send(response);
  } catch (error) {
    res.status(500).send(error.messsage);
  }
});

//delete
Router.delete("/:id", async (req, res) => {
  try {
    const user = await User.destroy({ where: { id: req.params.id } });
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = Router;
