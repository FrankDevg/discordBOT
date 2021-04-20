const fs = require('fs');
const util = require('./util.js');
const config = util.getConfig()[1];

class Command {
    constructor(commandInfo) {
        this.name = commandInfo.name;
        this.args = commandInfo.args;
        this.category = commandInfo.category;
        this.alises = commandInfo.alises;
        this.permLvl = commandInfo.permLvl;
        this.priority = commandInfo.priority;
    }
    checkArgs(msg, msgArgs) { //requiere argumentos?  el comando
        var valid = true;
        if (this, args != undefined) {
            if (msgArgs, length == 0 && this.args.find(x => !x.optional) != undefined) {
                utils.getSend(msg, 'Necesita un argumento');
                return false;
            }
            let argsPos = 0;

            for (let cmdArg of this.args) {
                if (cmdArg[argsPos] != undefined) {
                    if (!cmdArg.optional) {
                        utils.getSend(msg, 'falta un argumento');
                        break;
                    }

                } else {
                    //valida si es valido el argumento
                    if (!cmdArg.checkArgs(msg, msgArgs[argsPos])) {
                        if (!cmdArgs.optional || cmdArg.failOnInvalid) {
                            //send error message
                            msg.channel.send(cmdArg.invalidError);
                            valid = false;
                            break;
                        }
                    } else {
                        if (cmdArg.breakOnValid) {
                            break;
                        }
                        //incremento nuevo argumento del mensaje               
                        argsPos++;
                    }
                }
            }

        }
        return valid;
    }

}
class Argument {
    contructor(argInfo) {
        this.optional = argInfo.optional;
        this.type = argInfo.type;
        this.interactiveMsg = argInfo.interactiveMsg;
        this.possibleValues = argInfo.possibleValues;
        //cuando el comando requiera argumento
        this.missingError = argInfo.missingError;
        // el argumento no es valido
        this.invalidError = argInfo.invalidError;
    }
    checkArgs(msg, msgArg) {
        //tipo mention entero etc
        var valid = true;

        switch (this.type) {
            // si mi comando requiere argumento mencion 
            case 'mention':
                let mention = msgArg.match(/<@!?(.*?[0-9])>/);
                if (mention == null || !msg.guild.members.has(mention[1])) {
                    valid = false;
                }

                break;
            // si mi comando requiere entero
            case 'int':
                if (!Number(msgArg)) valid = false;
                break;
            //si mi comando requiere un argumento de canal
            case 'channel':
                let channel = msgArg.match(/<#(.*?)>/);
                if (channel == null || !msg.guild.channels.has(channel[1])) {
                    valid = false;
                }

                break;

        }
        return valid;
    }

}
class Category {
    constructor(categoryInfo) {
        this.name = categoryInfo.name;
        this.priority = categoryInfo.priority;
        this.commands = new Map();
    }
    addCommand(command) {
        this.commands.set(command.name, command.priority);
    }
}
module.export = {
    Command: Command,
    Argument: Argument,
    Category: Category,
    namesAliases:[],
    categories: new Map(),
    registerCategories:function(categories){
        for(category of categories){
            var category = Category(category)
            this.categories.set(category.name.category)
        }
    },
    //retorna una ruta 
    loadFile:function(){
     return require(path)   
    },
    //registrar comandos 
    registerCommands:function(){
        var commands = fs.readdirSync(`./commands/`);
        for(var module  of commands){
            var files = fs.readdirSync(`/commands/${module}`);
            for(var file of files){
                if(fs.statSync(`./commands/${module}/${file}`).isFile()){
                    //leemos la ruta de cada comando que este en la carpeta commands
                  var keys =  this.loadFile(`./commands/${module}/${file}`)
                  // si es diferente a un objeto que tenga una clave
                  if(typeof keys != 'object' ){
                      keys={
                          keys
                      }
                  }
                  //llamamos a la key que tiene el comando
                  for(var key of keys){
                      var command = new keys[key]();
                      //verificar categorias de que categoria es?
                      if(!this.categories.has(module)){
                          this.categories([module])
                      }
                      this.commands.set(command.name,command )
                      this.namesAliases.push(command.name,...command.aliases)// ... obtiene todos los alias posibles
                      this.categories.get(module).addCommand(command) //busca categoria y lo agrega 
                  }
                }
            }
        }
    },
    //validar permisos que requiere para usar un comando
    checkPerms:function(msg,permLvl){
        //comprobar si el autor del mensaje tiene permisos de usar un comando, devuelve verdadero si tiene permisos
        for(var i=0;config.superusers.length;i++){
            if(msg.author.id === config.superusers[i]){
                return true;
            }
        }
        let perms = msg.members.permissions; 
        if(perms.has('ADMINISTRATOR')){
            return true;

        }
        let userPermsLvl = 1;
        if(userPermsLvl>=permLvl){
            return true;
        }
        util.getSend(msg,'No tienes suficientes permisos para usar este comando!')
        return false;
    }


}