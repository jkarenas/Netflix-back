const {Sequelize,DataTypes} = require ("sequelize")
require("dotenv").config()

const movieModel=require("./models/Movies")

const {DB_USER,DB_PASSWORD,DB_HOST,DB_NAME, DB_DEPLOY}= process.env



 const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false, 
  native: false, 
  dialectOptions:{
   ssl:{
      require:true
   }
  }
});

const Movie = movieModel(sequelize)

module.exports={
   conn: sequelize,
   Movie: Movie, 
}