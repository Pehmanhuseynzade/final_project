const mongoose = require('mongoose')

const postreserveSchema = new mongoose.Schema({
    // type:Number,
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
    end:Date,
    // isActive: { type: Boolean, default: false },    
});

const postreserveModel = mongoose.model('res1', postreserveSchema);


module.exports = postreserveModel