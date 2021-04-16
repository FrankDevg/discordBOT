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
}