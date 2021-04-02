const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//init database
require("./db/database");

//config bodyparser
app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => {
  console.log(`App listening on port ${3000}!`);
});
