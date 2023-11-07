const {Sequelize,DataTypes} = require ("sequelize")
require("dotenv").config()

const studentModel=require("./models/Students")

const {DB_USER,DB_PASSWORD,DB_HOST,DB_NAME}= process.env



 const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, 
  native: false, 
});

studentModel(sequelize)

module.exports={
   conn: sequelize,

}