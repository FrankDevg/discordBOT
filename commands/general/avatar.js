//estructura con argumentos 
const { MessageEmbed } = require('discord.js');
const commands = require('../../commands.js')
const { Command } = require('../../commands.js')
//heredo la estructura de la clase commands y le pasamos los valores
module.exports = class AvatarCommand extends commands.Command {
    constructor() {
        super({
            name: 'avatar',
            aliases: [],
            args:[
                new commands.Argument({
                    optional: true,
                    missingError:'Necesita enviar un mensaje',
                    invalidError: 'El argumento no es valido',

                })
            ],
            category: 'test',
            priority: 9,
            permLvl: 0


        })
    }
    execute(msg,args) {
        let mentions = msg.mentions.users.first() || msg.author;
        
        msg.channel.send(new MessageEmbed().setColor('RANDOM')
        .setImage(mentions.displayAvatarURL())
        .setFooter(`Avatar de ${mentions.tag}`));
    }


}