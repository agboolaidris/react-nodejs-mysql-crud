const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee",
});

mysqlConnection.connect((err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database connected");
  }
});
