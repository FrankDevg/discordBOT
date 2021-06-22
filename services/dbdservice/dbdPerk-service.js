/*const createComment = function(tutorialId, comment) {
    return db.Comment.create(comment).then(docComment => {
      console.log("\n>> Created Comment:\n", docComment);
  
      return db.Tutorial.findByIdAndUpdate(
        tutorialId,
        { $push: { comments: docComment._id } },
        { new: true, useFindAndModify: false }
      );
    });
  };
  */
  'use strict'
  const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
  const mongoose = require ('mongoose');

  const lang = require('../../util.js').getLanguage();
const dbdCharapterSchema = require('../models/dbdModels/dbdCharapter-schema');
var ObjectId = require('mongodb').ObjectID;
  const dbdPerkSchema = require('../models/dbdModels/dbdPerk-schema');
  module.exports = {
      
      savePerk: async function (msg, args) {
       //recibir id del charapter
       var id = mongoose.Types.ObjectId()
          await dbdPerkSchema.findOneAndUpdate({
            
                _id: id
            },
            {
                _id:id  ,
                name:"Empatia",
                imgUrl:"https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/48/Empathy.gif/revision/latest/scale-to-width-down/128?cb=20200926195403",  
                description:"The Auras of dying or injured Survivors are revealed to you within a range of 64/96/128 metres Empathy does not reveal the Aura of a Survivor currently being carried by the Killer.",
               
                  
            },
            {
                upsert: true,


            }, (err, result) => {
                if (err) {

                    console.log(err);
                    msg.channel.send('Error al ingresar la perk');
                } else {
                    //cache.set(msg.guild.id,msg.channel.id)
                    msg.channel.send('Welcome perk set!');

                }
            });
             dbdCharapterSchema.findOneAndUpdate(
              {
                  _id: 'dbdClauMore1'
              },
              {
                $push: { perks: id} 
               
                  
              },
              {
                  upsert: true,
                  
  
  
              }, (err, result) => {
                  if (err) {
  
                      console.log(err);
                      msg.channel.send('Error al ingresar al personaje');
                  } else {
                      //cache.set(msg.guild.id,msg.channel.id)
                      msg.channel.send('Upload  charapter set!');
  
                  }
              });
      }
  
  }