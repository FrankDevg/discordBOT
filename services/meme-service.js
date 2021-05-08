'use strict'
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const lang = require('../util.js').getLanguage();

const memeSchema = require('../services/models/meme-schema');
module.exports = {
    saveMeme: async function (msg) {
        await memeSchema.findOneAndUpdate(
            {
                _id: 10
            },
            {
                _id: 10,
                keywords: "Dorime",
                memeURL: "831187746986000424/831193209329680434/dorime11576397150.png"
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
    getMeme: async function (msg, id) {
        var totalMemes;
        if (id == 'random' || id == 'ran') {
            //total de documentos memes!
            await memeSchema.countDocuments({}, function (err, count) {
                totalMemes = count;
                id = Math.floor(Math.random() * totalMemes) + 1;
                console.log(id);
            });


        }
      
        await memeSchema.findOne({
            _id: id
        }, function (err, result) {
            if (err) throw err;
            let avatarURL = (msg.author.avatarURL()) ? msg.author.avatarURL() : 'https://th.bing.com/th/id/OIP.QGjlnckx4xMewe5flHMPpgHaFC?pid=ImgDet&rs=1';
            if (result !== null) {
                msg.channel.send(new MessageEmbed().setColor(0x02b9ba).setAuthor("" + msg.author.username, "" + avatarURL).setImage('https://cdn.discordapp.com/attachments/' + result.memeURL));

            } else {
                msg.channel.send(new MessageEmbed().setColor("RED").setDescription(lang.error.noFound.meme));

            }
        });

    }
}



