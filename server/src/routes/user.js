const Router = require("express").Router();
const db = require("../db/database");

Router.get("/", async (req, res) => {
  try {
    const data = await db.query("SELECT * from employee");
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = Router;
