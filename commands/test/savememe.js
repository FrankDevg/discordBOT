const commands = require('../../commands.js')

const {  MessageEmbed } = require('discord.js');
const memeService = require('../../services/meme-service');
const lang = require('../../util.js').getLanguage();


//heredo la estructura de la clase commands y le pasamos los valores
module.exports = class MemeCommand extends commands.Command {
    constructor(){
        super({
            name:'savemem',
            aliases: ['sm','savem'],
            
            priority:9,
            permLvl:3

        })
    }
    execute(msg) {
       // memeService.getMeme(msg);
        memeService.saveMeme(msg)
    }
    
           
    
    


}