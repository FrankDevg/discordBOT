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
    ctx.drawImage(background, x, y,canvas.width,canvas.height);
    ctx.strokeStyle ='#C0C0C0';
    ctx.strokeRect(0,0,canvas.width-5,canvas.height-5);

    ctx.font = '32px Impact';
    ctx.fillStyle='#F8F8F8';
    ctx.fillText('Welcome to the paradise',canvas.width/2.5,canvas.height/3.5);
        ctx.font = '45px Impact';
        ctx.fillStyle='#F8F8F8';
        ctx.fillText(`${member.user.tag}`,canvas.width/2.5,canvas.height/1.9);
            ctx.font = '25px Impact';
            ctx.fillStyle='#F8F8F8';
            ctx.fillText(`Member# ${member.guild.memberCount }`,canvas.width/1.35,canvas.height/1.1);
console.log()
    ctx.beginPath();
    ctx.arc(125,125,100,0,Math.PI*2,true);
    ctx.closePath();
    ctx.clip();
    const avatar = await Canvas.loadImage(
        member.user.displayAvatarURL({
            format: 'png'
        })
    )

    ctx.drawImage(avatar,25,25,200,200);
    const attachment = new MessageAttachment(canvas.toBuffer());
    channel.send('', attachment);
  
    //`Welcome to the server mensaje enviado desde modulo eventos con bdd, ${member}`
}