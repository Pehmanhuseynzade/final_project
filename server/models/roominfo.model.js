const mongoose = require('mongoose')

const roominfoSchema = new mongoose.Schema({
  totalname: String,
  roominfos: String
});

const roominfoModel = mongoose.model('Roominfo', roominfoSchema);

module.exports = roominfoModel