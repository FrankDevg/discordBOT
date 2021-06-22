'use strict'
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const lang = require('../../util.js').getLanguage();

const dbdCharapterSchema = require('../models/dbdModels/dbdCharapter-schema');
module.exports = {
    getCharapter: async function (msg,arg) {
        console.log('mensaje',msg);
        console.log('argumento',arg);
     
     /*
    
        dbdCharapterSchema.findOne({
            _id: id
        }, function (err, result) {
            if (err) throw err;
            let avatarURL = (msg.author.avatarURL()) ? msg.author.avatarURL() : 'https://th.bing.com/th/id/OIP.QGjlnckx4xMewe5flHMPpgHaFC?pid=ImgDet&rs=1';
            if (result !== null) {
                console.log(result.memeURL);
                msg.channel.send(new MessageEmbed().setColor(0x02b9ba).setAuthor("" + msg.author.username, "" + avatarURL).setImage('https://cdn.discordapp.com/attachments/' + result.memeURL));

            } else {
                msg.channel.send(new MessageEmbed().setColor("RED").setDescription(lang.error.noFound.meme));
//meterlos en el modulo ?
            }
        });*/

    },
    saveCharapter: async function (msg, args) {
     

        await dbdCharapterSchema.findOneAndUpdate(
            {
                _id: "dbdClauMore1"
            },
            {
                _id:"dbdClauMore1",
                name:"Claudette Morel",
                characterImgUrl:"https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/65/S03_charSelect_portrait.png/revision/latest/scale-to-width-down/260?cb=20200721164234",
                typeCharacter:"survivor",
                descriptionCharacter:"String",
                gender:"Feminino",
                role:"Botánica estudiosa",
                nationality:"Canadiense",
                perks:[]

            },
            {
                upsert: true,


            }, (err, result) => {
                if (err) {

                    console.log(err);
                    msg.channel.send('Error al ingresar al personaje');
                } else {
                    //cache.set(msg.guild.id,msg.channel.id)
                    msg.channel.send('Welcome charapter set!');

                }
            });
    }

}