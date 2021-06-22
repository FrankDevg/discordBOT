const mongoose = require ('mongoose')


const DbdPerkSchema = new mongoose.Schema({
    _id:String,
    name:String,
    imgUrl:String,  
    description:String,
   
});
module.exports = mongoose.model('DbdPerkSchema',DbdPerkSchema);