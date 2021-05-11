const welcomeService = require('../services/welcome-service');
const Canvas = require('canvas');
const { MessageAttachment } = require('discord.js');
const path = require('path');
module.exports = async (client, member) => {
    // Send the message to a designated channel on a server:
    const channelId = await welcomeService.getWelcomeChannel(member.guild.id);
    const channel = await member.guild.channels.cache.find(ch => ch.id === channelId);
    // Do nothing if the channel wasn't found on this server
    // console.log(channel);
    if (!channel) return;
    // Send the message, mentioning the member
    //console.log('Miembro', member.guild.id);
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage(
        path.join(__dirname, '../assets/background.png')
    )
    console.log('OKAYYYYYYY', member.user.displayAvatarURL({
        format: 'png'
    }));
    let x = 0;
    let y = 0;
    ctx.drawImage(background, x, y);
    const pfp = await Canvas.loadImage(
        member.user.displayAvatarURL({
            format: 'png'
        })
    )
    // centro de la imagen !!!!! Mover valores segun desee!
    x = canvas.width / 2 - pfp.width / 2;
    y = 25;
    ctx.drawImage(pfp,x,y);
    ctx.fillStyle='#ffffff';
    ctx.font='35px sans-serif';
    let text = `Welcome ${member.user.tag}`
    x = canvas.width/2-ctx.measureText(text).width/2;
    ctx.fillText(text,x,60+pfp.height);
    const attachment = new MessageAttachment(canvas.toBuffer());
    channel.send('', attachment);
    //`Welcome to the server mensaje enviado desde modulo eventos con bdd, ${member}`
}