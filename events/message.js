const config = require('../util.js').getConfig()[1];
const commands = require('../commands.js');
const util = require('../util.js');

let prefix = config.prefix;
module.exports = async(client,message)=>{
    if (message.author.bot) return;
    let cmd = message.content.slice(prefix.length);
    if (cmd != undefined) {
        cmd = cmd.split(' ');

    }

    let result = await commands.checkValidCmd(message, cmd, prefix);
    if (result) {
        commands.executeCmd(message, cmd);

    }

}