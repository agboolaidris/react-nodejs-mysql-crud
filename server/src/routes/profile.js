const Router = require("express").Router();
const db = require("../db/database");
const auth = require("../middleware/auth");

Router.get("/", [auth], async (req, res) => {
  try {
    const profile = await req.user.getProfile();
    res.json(profile);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

Router.post("/", [auth], async (req, res) => {
  try {
    const { department, branch, position } = req.body;

    const profile = await req.user.createProfile({
      department,
      branch,
      position,
    });

    res.json(profile);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

Router.post("/todo/:id", [auth], async (req, res) => {
  try {
    const profile = await req.user.getProfile();
    const check = await profile.getTodos({ where: { id: req.params.id } });
    console.log(check);
    let response;
    if (check.length < 1) {
      const todo = await db.Todo.findByPk(req.params.id);
      response = await profile.addTodo(todo);
    } else {
      response = "user already assign ";
    }
    res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = Router;
