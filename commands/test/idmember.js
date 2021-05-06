//estructura con argumentos 
const commands = require('../../commands.js')
const lang = require('../../util.js').getLanguage();

//heredo la estructura de la clase commands y le pasamos los valores
module.exports = class IdCommand extends commands.Command {
    constructor() {
        super({
            name: 'mencion',
            aliases: ['id'],
            args:[
                new commands.Argument({
                    optional: false,
                    type:'mention',
                    missingError:lang.error.noArgs.mention,
                    invalidError:lang.error.incoArgs.text,

                })
            ],
            category: 'test',
            priority: 9,
            permLvl: 0


        })
    }
    execute(msg,args) {
        console.log('/////'+args);
        msg.channel.send('mencionado');
    }


}