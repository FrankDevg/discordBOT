
const {Command} = require('../../commands.js')
const welcomeSchema = require('../../models/welcome-schema')
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
     execute(msg){
       
         ok(msg);
        
    }
    


}
 async function ok(msg){
 
    console.log(msg.id,msg.channel.id);
    await welcomeSchema.findOneAndUpdate( 
     {
        _id:msg.id
    },
    {
        _id:msg.id,
        channelId:msg.channel.id
    },
    {
        upsert: true,
        rawResult: true   
       
    },(err,channelUpdated)=>{
        if(err){
            console.log(err);
            msg.channel.send('Error al Actualizar el canal');
        }else{
            if(!channelUpdated){
                msg.channel.send('No se ha podido actualizar el canal');
            }else{
                msg.channel.send('Welcome channel set!');
            }
        }
    });
    
}