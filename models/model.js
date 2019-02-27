const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    latitude:{type: Number, required: true},
    longitude:{type: Number, required: true},

})
module.exports = mongoose.model('Data', dataSchema)
