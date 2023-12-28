const express = require("express")
const router = express.Router()
const mainRoutes = require("../Routes/mainRoutes")

router.use("/movies",mainRoutes)

module.exports = router