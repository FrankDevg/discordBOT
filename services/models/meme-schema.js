const mongoose = require ('mongoose')


const MemeSchema = new mongoose.Schema({
    _id:String,
    keywords:String,
    memeURL:String
});
module.exports = mongoose.model('MemeSchema',MemeSchema);