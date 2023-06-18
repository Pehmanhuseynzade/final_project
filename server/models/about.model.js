const mongoose = require('mongoose')

const aboutSchema = new mongoose.Schema({
    desc1: String, 
    desc2: String,
    aboutimage:String
  });

  const aboutModel = mongoose.model('About', aboutSchema);


  module.exports = aboutModel