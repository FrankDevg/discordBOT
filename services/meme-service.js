  'use strict'
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
    }
  }
 

     
  