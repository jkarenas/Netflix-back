const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Movie = sequelize.define(
    'Movie',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      backdrop_path: {
        type: DataTypes.STRING
      },
      poster_path: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return Movie;
};
