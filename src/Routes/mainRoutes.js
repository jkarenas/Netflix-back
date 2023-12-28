const express = require("express")
const { addFavorite, getFavorites, deleteFavorite } = require("../controlllers/movies")

const router = express.Router()

router.post("/create", addFavorite)
router.get("/read", getFavorites)
router.delete("/delete/:id", deleteFavorite)
module.exports = router