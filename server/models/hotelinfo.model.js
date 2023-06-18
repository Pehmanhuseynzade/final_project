const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
    count: String, 
    name: String,
  });

  const infoBlog = mongoose.model('Info', infoSchema);


  module.exports = infoBlog
