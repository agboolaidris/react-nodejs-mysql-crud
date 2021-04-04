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

module.exports = Router;
