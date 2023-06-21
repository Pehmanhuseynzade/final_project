const mongoose = require('mongoose')

const partieimageSchema = new mongoose.Schema({
    partieimgname:String,
    partieimg:String 
  });

  const partieimageModel = mongoose.model('partieimage', partieimageSchema);


  module.exports = partieimageModel