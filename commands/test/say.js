//estructura con argumentos 
const commands = require('../../commands.js')
const lang = require('../../util.js').getLanguage();
//heredo la estructura de la clase commands y le pasamos los valores
module.exports = class SayCommand extends commands.Command {
    constructor() {
        super({
            name: 'say',
            aliases: [],
            args:[
                new commands.Argument({
                    optional: false,
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
        msg.channel.send(args.join(' '));
    }


}