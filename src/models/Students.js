const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
   sequelize.define(
    'Student', 
    {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: {
      type: DataTypes.STRING
    },
    nota1: {
      type: DataTypes.FLOAT
    },
    nota2: {
      type: DataTypes.FLOAT
    },
    nota3: {
      type: DataTypes.FLOAT
    },
    nota4: {
      type: DataTypes.FLOAT
    },
    promedio: {
      type: DataTypes.FLOAT
    },
    fecha_creacion: {
      type: DataTypes.DATE
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, { 
    freezeTableName: true, 
    timestamps: false 
  });

  
};

    
