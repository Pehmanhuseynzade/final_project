const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
  formusername: String,
  surname: String,
  formemail: String,
  phonenum: Number,
  messages:String
});

const formModel = mongoose.model('Form', formSchema);


module.exports = formModel