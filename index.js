const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 3001

const { dbConnection } = require("./config/config")
dbConnection()

app.use(express.json())

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))
