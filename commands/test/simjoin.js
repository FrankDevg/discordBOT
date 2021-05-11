//estructura con argumentos 
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');

const commands = require('../../commands.js')
const lang = require('../../util.js').getLanguage();
const client = new Client();

//heredo la estructura de la clase commands y le pasamos los valores
module.exports = class SimJoinCommand extends commands.Command {
    constructor() {
        super({
            name: 'simjoin',
            aliases: [],
            args:[
                new commands.Argument({
                    optional: true,
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
        console.log('Emitiendo evendo de entrada');
        client.emit('guildMemberAdd',msg.member);
    }


}