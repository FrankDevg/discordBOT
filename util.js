//archivo de funciones
module.exports={
    getConfig: function(){
        let config = './config.js'
        return[config,require(config)]
    },
    getSend: function(msg,text){
        msg.channel.send(text)
    },
    //internacionalizacion
    getLanguage:function(){
        let lang= require('./languages/EN-en.json');
        return lang;
    }

}