const mongoose = require('mongoose')

const sendemailSchema = new mongoose.Schema({
  sendemail: String
});

const sendemailModel = mongoose.model('sendemail', sendemailSchema);


module.exports = sendemailModel