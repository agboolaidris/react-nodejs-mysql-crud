module.exports = (sequelize, Sequelize) => {
  const TodoList = sequelize.define("todoLists", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });

  return TodoList;
};
