const mongoose = require('mongoose')

const spainfosecondSchema = new mongoose.Schema({
    spaname2:String,
    spa2desc1:String,
    spa2desc2: String,
    spaimg2:String 
  });

  const spasecondModel = mongoose.model('Spasecond', spainfosecondSchema);


  module.exports = spasecondModel