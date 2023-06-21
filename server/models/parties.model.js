const mongoose = require('mongoose')

const partiesSchema = new mongoose.Schema({
  partiesname: String,
  partiesdesc1: String,
  partiesdesc2: String,
  partiesimg: String, 
});

const partiesModel = mongoose.model('Parties', partiesSchema);


module.exports = partiesModel