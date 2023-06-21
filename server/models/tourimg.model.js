const mongoose = require('mongoose')

const tourimgSchema = new mongoose.Schema({
  tournameimg: String,
  tourimgs: String
});

const tourimgModel = mongoose.model('Tourimg', tourimgSchema);

module.exports = tourimgModel