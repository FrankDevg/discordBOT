const {Client, MessageEmbed, MessageAttachment  } = require('discord.js');
const client = new Client();
client.on('ready',()=>{
    console.log(`Bot is ready! as ${client.user.tag}`);
});
client.on('message',message=>{
    //receiving the message
    console.log(message);
    if(message.content==='Yin'){
        message.reply('Yan');
    }
    if(message.content === '!meme'){
        const user = client.users.cache.get("USERID");
        
        const embed = new MessageEmbed().setTitle('MEMEImagen')
        .setColor(0x02b9ba).setAuthor("" + message.author.username,""+message.author.avatarURL())
        .setImage("https://us.v-cdn.net/6030815/uploads/772/AUTAJEU6RDS2.png");
        message.channel.send(embed);
    }
});
client.login('ODMxMDE0NjU3NDY3NjEzMjA1.YHPEtQ.L0u98lIwHPbxdrPEuSJZ8gs-cRk');