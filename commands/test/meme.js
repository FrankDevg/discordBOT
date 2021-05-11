const commands = require('../../commands.js')

const {  MessageEmbed } = require('discord.js');
const memeService = require('../../services/meme-service');
const lang = require('../../util.js').getLanguage();


//heredo la estructura de la clase commands y le pasamos los valores
module.exports = class MemeCommand extends commands.Command {
    constructor(){
        super({
            name:'meme',
            aliases: ['mem','m'],
            
            priority:9,
            permLvl:0

        })
    }
    execute(msg) {
        memeService.getMeme(msg);
       // memeService.saveMeme(msg)
    }
    
           
    
    


}