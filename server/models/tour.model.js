const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
  tourname: String,
  tourdesc:String,
  tourimg: String
});

const tourModel = mongoose.model('Tour', tourSchema);


module.exports = tourModel