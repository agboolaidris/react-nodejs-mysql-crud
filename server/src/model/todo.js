module.exports = (sequelize, Sequelize) => {
  const Todos = sequelize.define("todos", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    title: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: true },
  });
  return Todos;
};
