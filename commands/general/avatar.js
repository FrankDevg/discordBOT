//estructura con argumentos 
const { MessageEmbed } = require('discord.js');
const commands = require('../../commands.js');
const lang = require('../../util.js').getLanguage();

//heredo la estructura de la clase commands y le pasamos los valores
module.exports = class AvatarCommand extends commands.Command {
    constructor() {
        super({
            name: 'avatar',
            aliases: [],
            args:[
                new commands.Argument({
                    optional: true,
                    missingError:lang.error.noArgs.arg,
                    invalidError: lang.error.incoArgs.text,

                })
            ],
            category: 'test',
            priority: 9,
            permLvl: 3


        })
    }
    execute(msg,args) {
        let mentions = msg.mentions.users.first() || msg.author;
        
        msg.channel.send(new MessageEmbed().setColor('RANDOM')
        .setImage(mentions.displayAvatarURL())
        .setFooter(`Avatar de ${mentions.tag}`));
    }


}