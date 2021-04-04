const Router = require("express").Router();

Router.get("/", async (req, res) => {
  try {
    const data = await db.query("SELECT * from employee");
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

Router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { name, position, age, branch } = req.body;

    const data = await db.query(
      "INSERT INTO employee (name, position, age, branch ) VALUES (?,?,?,?)",
      [name, position, age, branch]
    );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = Router;
