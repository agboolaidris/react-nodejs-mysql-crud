module.exports = (sequelize, Sequelize) => {
  const TodoList = sequelize.define("todoLists", {
    id: {
      type: Sequelize.STRING,
      autoIncrement: true,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
  });

  return TodoList;
};
