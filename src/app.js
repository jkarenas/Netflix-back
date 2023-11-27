const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const route = require("./Routes/index")

const app = express()

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use("/", route)


module.exports = app