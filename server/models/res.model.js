const mongoose = require('mongoose')

const resSchema = new mongoose.Schema({
  resname: String,
  resdesc:String,
  resimg: String
});

const resModel = mongoose.model('res', resSchema);


module.exports = resModel