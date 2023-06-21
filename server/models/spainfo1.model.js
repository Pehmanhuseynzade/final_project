const mongoose = require('mongoose')

const spainfofirstSchema = new mongoose.Schema({
  spaname: String,
  spadesc1: String,
  spadesc2: String,
  spaimg1: String, 
});

const spafirstModel = mongoose.model('SpaFirst', spainfofirstSchema);


module.exports = spafirstModel