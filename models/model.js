const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    latitude:{type: number, required: true},
    longitude:{type: number, required: true},

})
module.exports = mongoose.model('Data', dataschema)
