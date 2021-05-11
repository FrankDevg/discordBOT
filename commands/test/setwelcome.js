
const commands = require('../../commands.js')
const lang = require('../../util.js').getLanguage();
const welcomeService = require('../../services/welcome-service');

/*
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
            permLvl:0
        })
    }
    
    async  execute(msg){
       
    }
    


}
module.exports=getChannelId=(guildId)=>{
    return cache.get(guildId);

}
*/
module.exports = class SetWelcomeCommand extends commands.Command {
    constructor() {
        super({
            name: 'setwelcome',
            aliases: [],
            args:[
                new commands.Argument({
                    optional: false,
                    type:'channel',
                    missingError:lang.error.noArgs.arg,
                    invalidError:lang.error.incoArgs.text,

                })
            ],
            category: 'test',
            priority: 9,
            permLvl:2


        })
    }
    execute(msg,args) {
        welcomeService.setWelcome(msg,args);
    }


}