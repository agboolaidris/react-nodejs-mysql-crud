const express = require("express");
const cookeParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./db/database");

//environment variable
require("dotenv").config();

//db config
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

//config cookie-parser
app.use(cookeParser());

//config bodyparser
app.use(express.json());
app.use(express.urlencoded());

//setup routes
app.use("/api/todo", require("./routes/todo"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
