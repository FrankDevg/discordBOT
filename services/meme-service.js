'use strict'
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const lang = require('../util.js').getLanguage();

const memeSchema = require('../services/models/meme-schema');
module.exports = {
    saveMeme: async function (msg) {
        await memeSchema.findOneAndUpdate(
            {
                _id: 64 
            },
            {
                _id: 64,
                keywords: "No seas mamon",
                memeURL: "831187746986000424/841401478454444122/unknown.png"
            },
            {
                upsert: true,


            }, (err, memeUpdated) => {
                if (err) {

                    console.log(err);
                    msg.channel.send('Error al ingresar  el meme');
                } else {
                    msg.channel.send('Meme ingresado correctamente');

                }
            });
    },
    countMeme: async function () {
        
        return id;
    },
    getMeme: async function (msg) {
     
        let id =await Math.floor(Math.random() * 64) + 1;
        //id=64;
     
         memeSchema.findOne({
            _id: id
        }, function (err, result) {
            if (err) throw err;
            let avatarURL = (msg.author.avatarURL()) ? msg.author.avatarURL() : 'https://th.bing.com/th/id/OIP.QGjlnckx4xMewe5flHMPpgHaFC?pid=ImgDet&rs=1';
            console.log(msg);
            if (result !== null) {
                console.log(result.memeURL);
                msg.channel.send(new MessageEmbed().setColor(0x02b9ba).setAuthor("" + msg.author.username, "" + avatarURL).setImage('https://cdn.discordapp.com/attachments/' + result.memeURL));

            } else {
                msg.channel.send(new MessageEmbed().setColor("RED").setDescription(lang.error.noFound.meme));

            }
        });

    }
}



