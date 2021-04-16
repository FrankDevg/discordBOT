const fs =require('fs');
const util = require('./util.js');
const config = util.getConfig()[1];

class Command {
    constructor(commandInfo){
        this.name = commandInfo.name,
        this.args = commandInfo.args;
        this.category = commandInfo.category;
        this.alises = commandInfo.alises;
        this.permLvl = commandInfo.permLvl;
        this.priority = commandInfo.priority;     
    }
    checkArgs(msg,msgArgs){ //requiere argumentos?  el comando
        let argsPos = 0;
        if(this,args != undefined ){
            if(msgArgs,length == 0 && this.args.find(x=> !x.optional)!= undefined){
                utils.getSend(msg,'Necesita un argumento');
                return false;
            }
        }
      
        for(let cmdArg of this.args){
            if(cmdArg[argsPos]!= undefined){
                if(!cmdArg.optional){
                utils.getSend(msg,'falta un argumento');
                    break;
                }

            }

        }

    }
}