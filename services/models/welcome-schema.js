const mongoose = require ('mongoose')


const WelcomeSchema = new mongoose.Schema({
    _id:String,
    channelId:String
});
module.exports = mongoose.model('WelcomeSchema',WelcomeSchema);