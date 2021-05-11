module.exports = async(client,member)=>{
 // Send the message to a designated channel on a server:
 const channel = member.guild.channels.cache.find(ch => ch.id === '789635532908003340');
 // Do nothing if the channel wasn't found on this server
 if (!channel) return;
 // Send the message, mentioning the member
 console.log(member);
 channel.send(`Welcome to the server mensaje enviado desde modulo eventos welcome, ${member}`);
}