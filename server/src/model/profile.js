module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define("profiles", {
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    department: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    branch: {
      type: Sequelize.STRING,
    },
    position: {
      type: Sequelize.STRING,
    },
  });
  return Profile;
};
