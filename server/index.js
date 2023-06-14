const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
// const joi = require('joi')
// const multer = require('multer')

const app = express()

app.use(cors())
app.use(bodyParser.json())
dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const infoSchema = new mongoose.Schema({
  count: String, 
  name: String,
});

const infoBlog = mongoose.model('Info', infoSchema);

app.post(`/api/infomarxal`,async(req,res)=>{
  const {count,name} = req.body
  const post = new infoBlog({
    count:count,
    name:name
  })
  await post.save()
  res.status(200).send({
    message:"Posted succefully!",
    payload:post
  })
})

app.get(`/api/infomarxal`,async(req,res)=>{
  const {name} = req.query
  const get = await infoBlog.find()
  if(!name){
    res.status(200).send(get)
  }
  else{
    const searched = get.filter((x)=>
      x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
    )
    res.status(200).send(searched)
  }
})

app.get(`/api/infomarxal/:id`,async(req,res)=>{
  const {id} = req.params
  const newID = await infoBlog.findById(id)
  res.status(200).send(newID)
})


app.delete(`/api/infomarxal/:id`,async(req,res)=>{
  const id = req.params.id
  const deleteInfo = await infoBlog.findByIdAndDelete(id)
  res.status(200).send(deleteInfo)
})

app.put(`/api/infomarxal/:id`,async(req,res)=>{
  const id = req.params.id
  const {count,name} = req.body
  const put = {
    count:count,
    name:name
  }
  await infoBlog.findByIdAndUpdate(id,put)
     res.status(200).send({
          message:`${put.name} update is succesfully!`
      })
})





PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION

mongoose.connect(DB_CONNECTION.replace('<password>', DB_PASSWORD)).then(() => {
  console.log("MongoDB Connected!!!")
});
