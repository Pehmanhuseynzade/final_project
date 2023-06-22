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

const media_router = require("./routes/media.routes")
const infohotel_router = require("./routes/infohotel.routes")
const about_router = require("./routes/about.routes")
const spaimages_router = require("./routes/spaimages.routes")
const spainfo1_router = require("./routes/spainfo1.routes")
const parties_router = require("./routes/parties.routes")
const partieimg_router = require("./routes/partieimg.routes")
const tour_router = require("./routes/tour.routes")
const tourimg_router = require("./routes/tourimg.routes")
const entment_router = require("./routes/entment.routes")
const entmentimg_router = require("./routes/entmentimg.routes")
const res_router = require("./routes/res.routes")
const roominfo_router = require("./routes/roominfo.routes")
const room_router = require("./routes/rooms.routes")
const home_router = require("./routes/home.routes")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(`/api/media`,media_router)
app.use(`/api/infomarxal`,infohotel_router)
app.use(`/api/about`,about_router)
app.use(`/api/spaimages`,spaimages_router)
app.use(`/api/spainfo1`,spainfo1_router)
app.use(`/api/parties`,parties_router)
app.use(`/api/partieimg`,partieimg_router)
app.use(`/api/tour`,tour_router)
app.use(`/api/tourimg`,tourimg_router)
app.use(`/api/entment`,entment_router)
app.use(`/api/entmentimg`,entmentimg_router)
app.use(`/api/res`,res_router)
app.use(`/api/roominfo`,roominfo_router)
app.use(`/api/rooms`,room_router)
app.use(`/api/home`,home_router)

PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION

mongoose.connect(DB_CONNECTION.replace('<password>', DB_PASSWORD)).then(() => {
  console.log("MongoDB Connected!!!")
});
