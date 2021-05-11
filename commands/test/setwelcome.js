
const {Command} = require('../../commands.js');
const welcomeSchema = require('../../services/models/welcome-schema');
const cache = new Map();
const loadData = async()=>{
    const results = await welcomeSchema.find();
    for (const result of results){
        cache.set(result._id,result.channelId);
    }
}
//modulo ingreso en la base de datos mongo db
module.exports = class SetWelcomeCommand extends Command{
    constructor(){
        super({
            name:'setwelcome',
            aliases: ['welcome','wel'],
            category: 'test',
            priority:9,
            permLvl:3

        })
    }
    
    async  execute(msg){
       await welcomeSchema.findOneAndUpdate( 
            {
               _id:msg.guild.id
           },
           {
               _id:msg.guild.id,
               channelId:msg.channel.id
           },
           {
               upsert: false,
               
              
           }, (err,channelUpdated)=>{
               if(err){
       
                   console.log(err);
                   msg.channel.send('Error al Actualizar el canal');
               }else{
                        cache.set(msg.guild.id,msg.channel.id)
                       msg.channel.send('Welcome channel set!');
                   
               }
           });
    }
    


}
module.exports=getChannelId=(guildId)=>{
    return cache.get(guildId);

}
