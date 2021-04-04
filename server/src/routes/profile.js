const Router = require("express").Router();
const Profile = require("../db/database").Profile;
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

module.exports = Router;
