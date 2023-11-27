const server = require("./src/app")
const {conn}= require("./src/db")

const PORT = 3003

server.listen(PORT, ()=>{
   conn.sync({force:false})
    console.log(`server in port ${PORT}`)
})


