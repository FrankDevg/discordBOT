const mongoose = require ('mongoose')


const DbdCharapterSchema = new mongoose.Schema({
    _id:String,
    name:String,
    characterAvatarUrl:String,
    type:String,
    description:String,
    gender:String,
    role:String,
    nationality:String,
    difficulty:String,
    quote:String,
    characterImgUrl:String,
     keywords:[{type:String}],        
    perks:[{
        type:String,
        ref:"DbdPerkSchema"
    }]

});
module.exports = mongoose.model('DbdCharapterSchema',DbdCharapterSchema);