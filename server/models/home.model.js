const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
  homename: String,
  homedesc:String,
  homeimg: String
});

const homeModel = mongoose.model('home', homeSchema);


module.exports = homeModel