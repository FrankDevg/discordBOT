//estructura con argumentos 
const commands = require('../../commands.js')
const lang = require('../../util.js').getLanguage();
const dbdCharapterService = require('../../services/dbdservice/dbdCharapter-service');
const dbdPerkService = require('../../services/dbdservice/dbdPerk-service');

//heredo la estructura de la clase commands y le pasamos los valores
module.exports = class CharapterCommand extends commands.Command {
    constructor() {
        super({
            name: 'charapter',
            aliases: [],
            args:[
                new commands.Argument({
                    optional: false,
                    missingError:lang.error.noArgs.arg,
                    invalidError:lang.error.incoArgs.text,

                })
            ],
            category: 'dbd',
            priority: 9,
            permLvl:2


        })
    }
    execute(msg,args) {
        //dbdPerkService.savePerk(msg,args);
    }


}