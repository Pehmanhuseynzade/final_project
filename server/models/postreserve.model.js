const mongoose = require('mongoose')

const postreserveSchema = new mongoose.Schema({
    nameroom: String,
    price: Number,
    personcount: Number,
    capacity: Number,
    countroom: Number,
    formusername: String,
    lastname: String,
    formemail: String,
    phonenum: Number,
    start:Date,
    end:Date
});

const postreserveModel = mongoose.model('res1', postreserveSchema);


module.exports = postreserveModel