'use strict'
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const lang = require('../util.js').getLanguage();

const welcomeSchema = require('../services/models/welcome-schema');
module.exports = {
    setWelcome: async function (msg, args) {
        let channelId = args[0];      //.match(/<#(.*?)>/).slice(1);

        await welcomeSchema.findOneAndUpdate(
            {
                _id: msg.guild.id //id servidor
            },
            {
                _id: msg.guild.id,
                channelId: channelId.match(/<#(.*?)>/)[1] //id del canal
            },
            {
                upsert: true,


            }, (err, channelUpdated) => {
                if (err) {

                    console.log(err);
                    msg.channel.send('Error al Actualizar el canal');
                } else {
                    //cache.set(msg.guild.id,msg.channel.id)
                    msg.channel.send('Welcome channel set!');

                }
            });
    },
    countMeme: async function () {

        return id;
    },
    getWelcomeChannel: async function (id) {

        //id=64;
        let channelId;
        await welcomeSchema.findOne({
            _id: id
        }, function (err, result) {
            if (err) throw err;
            if (result !== null) {
                channelId = result.channelId;
            } else {
                console.log('no se encontro el channel');

            }
        });
        return channelId;
    }

}