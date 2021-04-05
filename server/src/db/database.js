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

const User = require("../model/user")(sequelize, Sequelize.DataTypes);
const Profile = require("../model/profile")(sequelize, Sequelize.DataTypes);
const Todo = require("../model/todo")(sequelize, Sequelize.DataTypes);
const TodoList = require("../model/todoList")(sequelize, Sequelize.DataTypes);

Profile.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
Todo.belongsToMany(User, { through: "todolists" });
User.belongsToMany(Todo, { through: "todolists" });
User.hasOne(Profile);

db.Profile = Profile;
db.User = User;
db.Todo = Todo;
db.TodoList = TodoList;

module.exports = db;
