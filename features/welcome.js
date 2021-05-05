const commands = require("../commands")

module.exports =  (client) => {
    commands.registerCategories(config.categories);
    commands.registerCommands();
   
    client.on('guildMemberAdd',member=>{
        console.log(member.user.tag)
    })
}