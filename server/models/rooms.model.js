const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
  roomname: String,
  roomimg1: String,
  roomimg2: String,
  roomimg3: String,
  roomimg4: String,
  roomcount:Number
});

const roomModel = mongoose.model('room', roomSchema);

module.exports = roomModel