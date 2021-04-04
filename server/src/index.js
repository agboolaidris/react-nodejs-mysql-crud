const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./db/database");

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

//config bodyparser
app.use(express.json());
app.use(express.urlencoded());

//setup routes
app.use("/api/employee", require("./routes/user"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
