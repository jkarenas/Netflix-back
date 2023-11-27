const express = require("express")
const router = express.Router()
const mainRoutes = require("../Routes/mainRoutes")

router.use("/students",mainRoutes)

module.exports = router