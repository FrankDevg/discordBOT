  'use strict'
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');

  const memeSchema = require('../services/models/meme-schema');
  module.exports ={
     saveMeme:async function(msg){
        await memeSchema.findOneAndUpdate( 
            {
               _id:1
           },
           {
               _id:1,
               keywords:"Ya estoy art@",
               memeURL:"831187746986000424/831187760425074708/images.png"
           },
           {
               upsert: true,
               
              
           }, (err,memeUpdated)=>{
               if(err){
       
                   console.log(err);
                   msg.channel.send('Error al ingresar  el meme');
               }else{
                       msg.channel.send('Meme ingresado correctamente');
                   
               }
           });
    },
    getMeme:async function(msg,id){
        await memeSchema.findOne( {
            _id:1
        }, function(err, result) {
            if (err) throw err;
            console.log(result);
            let avatarURL = (msg.author.avatarURL()) ? msg.author.avatarURL() : 'https://th.bing.com/th/id/OIP.QGjlnckx4xMewe5flHMPpgHaFC?pid=ImgDet&rs=1';

            msg.channel.send(new MessageEmbed().setColor(0x02b9ba).setAuthor("" + msg.author.username, "" + avatarURL).setImage('https://cdn.discordapp.com/attachments/' + result.memeURL));
          });
    }
  }
 

     
  