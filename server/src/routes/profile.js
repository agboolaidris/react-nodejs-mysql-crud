const Router = require("express").Router();
const Profile = require("../db/database").Profile;
Router.get("/", async (req, res) => {
  try {
    const profile = await Profile.findAll();
    res.json(profile);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

Router.post("/", async (req, res) => {
  try {
    const { department, branch, position } = req.body;
    const profile = await Profile.create({
      department,
      branch,
      position,
    });

    res.json(profile);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = Router;
