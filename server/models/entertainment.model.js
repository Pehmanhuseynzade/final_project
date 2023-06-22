const mongoose = require('mongoose')

const entmentSchema = new mongoose.Schema({
  entmentname: String,
  entmentdesc:String,
  entmentimg: String
});

const entmentModel = mongoose.model('entment', entmentSchema);


module.exports = entmentModel