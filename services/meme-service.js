'use strict'
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const lang = require('../util.js').getLanguage();

const memeSchema = require('../services/models/meme-schema');
module.exports = {
    saveMeme: async function (msg) {
        await memeSchema.findOneAndUpdate(
            {
                _id: 132 
            },
            {
                _id: 132,
                keywords: "Loser",
                memeURL: "831187746986000424/844077571078357002/calamardo-borrando-perdedorloser-de-la-puerta01613014345.png"
            },
            {
                upsert: true,
// 74 75

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
     
        let id =await Math.floor(Math.random() * 132) + 1;
        //id=132;
     
         memeSchema.findOne({
            _id: id
        }, function (err, result) {
            if (err) throw err;
            let avatarURL = (msg.author.avatarURL()) ? msg.author.avatarURL() : 'https://th.bing.com/th/id/OIP.QGjlnckx4xMewe5flHMPpgHaFC?pid=ImgDet&rs=1';
            if (result !== null) {
                console.log(result.memeURL);
                msg.channel.send(new MessageEmbed().setColor(0x02b9ba).setAuthor("" + msg.author.username, "" + avatarURL).setImage('https://cdn.discordapp.com/attachments/' + result.memeURL));

            } else {
                msg.channel.send(new MessageEmbed().setColor("RED").setDescription(lang.error.noFound.meme));

            }
        });

    }
}



