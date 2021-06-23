'use strict'
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const lang = require('../../util.js').getLanguage();

const dbdCharacterSchema = require('../models/dbdModels/dbdCharapter-schema');
module.exports = {
    getCharacter:async   function (arg) {
       return  await dbdCharacterSchema.findOne({
            keywords: arg[0].toLowerCase()
        }, function (err, result) {
            if (err) throw err;
              if (result !== null) {
                  console.log(result._id);
                return result
            } else {
                return null;

            }
        });

    },
    saveCharacter: async function (msg, args) {
     

        await dbdCharacterSchema.findOneAndUpdate(
            {
                _id: "dbdDwigFair2"
            },
            {
                _id:"dbdDwigFair2",
                name:"Dwight Fairfield",
                characterAvatarUrl:"https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8c/S01_charSelect_portrait.png/revision/latest/scale-to-width-down/260?cb=20200721164239",
                type:"survivor",
                description:"Un líder nervioso, capaz de localizar a sus aliados y aumentar su eficacia. Sus perks, Vínculo, Demuestra lo que vales y Líder le permiten acercarse a otros supervivientes y proporcionarles bonificaciones a sus acciones, así como a las suyas propias. Es hábil para encontrar a otros y trabajar en grupo. Sus ventajas le ayudan a él y a los demás manteniéndolos unidos y vivos.",
                gender:"Masculino",
                role:"Lider nervioso",
                nationality:"Americano",
                difficulty:"Facil",
                quote:"Tenemos que trabajar en equipo, ¡necesito que sobrevivas para que yo pueda sobrevivir!",
                keywords: ["Dwight", "Fairfield", "Dwig"],
                characterImgUrl:"https://i.pinimg.com/originals/27/9a/bb/279abb6da96dea185acb4a5b99798e31.jpg",
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