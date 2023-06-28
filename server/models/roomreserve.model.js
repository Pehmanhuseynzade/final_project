const mongoose = require('mongoose')

const roomreserveSchema = new mongoose.Schema({
  nameroom: String,
  imageroom: String,
  price:Number,
  personcount:String,
  capacity:String,
  countroom:String,
});

const roomreserveModel = mongoose.model('Roomreserve', roomreserveSchema);

module.exports = roomreserveModel