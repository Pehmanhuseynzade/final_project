const mongoose = require('mongoose')

const entmentimgSchema = new mongoose.Schema({
  entmentnameimg: String,
  entmentimgs: String
});

const entmentimgModel = mongoose.model('entmentimg', entmentimgSchema);

module.exports = entmentimgModel