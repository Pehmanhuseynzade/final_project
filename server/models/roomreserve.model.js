const mongoose = require('mongoose')

const roomreserveSchema = new mongoose.Schema({
  nameroom: String,
  imageroom: String,
  price:Number,
  personcount:Number,
  capacity:String,
  countroom:Number,
  start:String,
  end:String
});

const roomreserveModel = mongoose.model('Roomreserve', roomreserveSchema);

module.exports = roomreserveModel