//estructura con argumentos 
const commands = require('../../commands.js')
const { Command } = require('../../commands.js')
//heredo la estructura de la clase commands y le pasamos los valores
module.exports = class SayCommand extends commands.Command {
    constructor() {
        super({
            name: 'say',
            aliases: [],
            args:[
                new commands.Argument({
                    optional: false,
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
        msg.channel.send(args.join(' '));
    }


}