const Router = require("express").Router();
const Todo = require("../db/database").Todo;
const auth = require("../middleware/auth");

Router.get("/", async (req, res) => {
  try {
    const profile = await Todo.findAll();
    res.json(profile);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

Router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;

    const todo = await Todo.create({
      title,
      description,
    });

    res.json(todo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = Router;
