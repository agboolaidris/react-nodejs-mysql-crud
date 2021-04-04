const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

User = require("../model/user")(sequelize, Sequelize);
Profile = require("../model/profile")(sequelize, Sequelize);
Todo = require("../model/todo")(sequelize, Sequelize);

Profile.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
Todo.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Todo);
User.hasOne(Profile);

db.Profile = Profile;
db.User = User;
db.Todo = Todo;

module.exports = db;
