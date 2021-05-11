const config = require('../util.js').getConfig()[1];
const commands = require('../commands.js');

module.exports = async (client) => {
    console.log(`Bot is ready! as ${client.user.tag} desde el modulo  ready`);
    // verificacion de la base de datos
    commands.registerCategories(config.categories);
    commands.registerCommands();
}