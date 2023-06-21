const mongoose = require('mongoose')

const mediaSchema = new mongoose.Schema({
    medianame:String,
    mediaimage: String, 
  });

  const mediaModel = mongoose.model('Media', mediaSchema);


  module.exports = mediaModel