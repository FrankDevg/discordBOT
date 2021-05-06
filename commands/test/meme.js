const {Command} = require('../../commands.js')
const {  MessageEmbed } = require('discord.js');
const memeService = require('../../services/meme-service');

//heredo la estructura de la clase commands y le pasamos los valores
module.exports = class memeCommand extends Command{
    constructor(){
        super({
            name:'meme',
            aliases: ['mem','m'],
            priority:9,
            permLvl:0

        })
    }
    execute(msg){
        msg.channel.send(new MessageEmbed().setColor('ORANGE')
                    .addField('Ya estoy art@', 'comando: !meme1')
                    .addField('Khe verga', 'comando: !meme2')
                    .addField('Que oferton', 'comando: !meme3')
                    .addField('No puede ser', 'comando: !meme4')
                    .addField('Eres una mesa', 'comando: !meme5')
                    .addField('Tas Bien', 'comando: !meme6')
                    .addField('Habla pues', 'comando: !meme7')
                    .addField('Pos alemerga', 'comando: !meme8')
                    .addField('brutal', 'comando: !meme9')
                    .addField('Dorime', 'comando: !meme10')
        )
         memeService.getMeme(msg,1);
    }
           
    
    


}