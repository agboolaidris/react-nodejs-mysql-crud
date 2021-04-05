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

db.User = require("../model/user")(sequelize, Sequelize.DataTypes);
db.Profile = require("../model/profile")(sequelize, Sequelize.DataTypes);
db.Todo = require("../model/todo")(sequelize, Sequelize.DataTypes);
db.TodoList = require("../model/todoList")(sequelize, Sequelize.DataTypes);

db.Profile.belongsTo(db.User, { constraints: true, onDelete: "CASCADE" });
db.User.hasOne(db.Profile);

db.Todo.belongsToMany(db.Profile, { through: db.TodoList });
db.Profile.belongsToMany(db.Todo, { through: db.TodoList });

module.exports = db;
