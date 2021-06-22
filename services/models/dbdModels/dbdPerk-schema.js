const mongoose = require ('mongoose')


const DbdSchema = new mongoose.Schema({
    _id:String,
    name:String,
    imgUrl:String,  
    description:String,
    charapter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"DbdCharapterSchema"
    }

});
module.exports = mongoose.model('DbdPerkSchema',DbdPerkSchema);