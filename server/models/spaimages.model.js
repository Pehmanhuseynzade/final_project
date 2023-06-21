const mongoose = require('mongoose')

const spaimageSchema = new mongoose.Schema({
    spaimgname:String,
    spaimg:String 
  });

  const spaimageModel = mongoose.model('Spaimage', spaimageSchema);


  module.exports = spaimageModel