const mysql = require("mysql");
const util = require("util");
const emitter = require("events");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee",
});

db.connect((err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database connected");
  }
});
db.query = util.promisify(db.query);

module.exports = db;
