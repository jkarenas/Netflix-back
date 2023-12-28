const {Sequelize,DataTypes} = require ("sequelize")
require("dotenv").config()

const movieModel=require("./models/Movies")

const {DB_USER,DB_PASSWORD,DB_HOST,DB_NAME}= process.env



 const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, 
  native: false, 
});

const Movie = movieModel(sequelize)

module.exports={
   conn: sequelize,
   Movie: Movie, 
}