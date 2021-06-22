'use strict'
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const lang = require('../../util.js').getLanguage();

const dbdCharapterSchema = require('../models/dbdModels/dbdCharapter-schema');
module.exports = {
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