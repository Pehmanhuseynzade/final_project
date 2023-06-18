const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const fileupload  =require('express-fileupload')
// const joi = require('joi')
// const multer = require('multer')

const app = express()

app.use(cors())
app.use(bodyParser.json())
dotenv.config()
app.use(fileupload())

const infohotel_router = require("./routes/infohotel.routes")
const about_router = require("./routes/about.routes")

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(`/api/infomarxal`,infohotel_router)
app.use(`/api/about`,about_router)


PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION

mongoose.connect(DB_CONNECTION.replace('<password>', DB_PASSWORD)).then(() => {
  console.log("MongoDB Connected!!!")
});
