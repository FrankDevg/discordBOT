//estructura sin argumentos 
const {Command} = require('../../commands.js')
//heredo la estructura de la clase commands y le pasamos los valores
module.exports = class PingCommand extends Command{
    constructor(){
        super({
            name:'ping',
            aliases: ['pn','p'],
            category: 'test',
            priority:9,
            permLvl:0

        })
    }
    execute(msg){
        msg.channel.send('PING!!!! desde el modulo test(probando modularidad)')
    }


}