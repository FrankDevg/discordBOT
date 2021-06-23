//estructura con argumentos 
const commands = require('../../commands.js')
const lang = require('../../util.js').getLanguage();
const dbdCharacterService = require('../../services/dbdservice/dbdCharapter-service');
const dbdPerkService = require('../../services/dbdservice/dbdPerk-service');
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');


//heredo la estructura de la clase commands y le pasamos los valores
module.exports = class CharacterCommand extends commands.Command {
    constructor() {
        super({
            name: 'info',
            aliases: [],
            args: [
                new commands.Argument({
                    optional: false,
                    missingError: lang.error.noArgs.arg,
                    invalidError: lang.error.incoArgs.text,

                })
            ],
            category: 'dbd',
            priority: 9,
            permLvl: 1


        })
    }
    execute(msg, args) {
        console.log(args);
        //  dbdCharacterService.saveCharacter(msg,args);
        dbdCharacterService.getCharacter(args).then((character) => {
            if(character){
                let avatarURL = (msg.author.avatarURL()) ? msg.author.avatarURL() : 'https://th.bing.com/th/id/OIP.QGjlnckx4xMewe5flHMPpgHaFC?pid=ImgDet&rs=1';

                msg.channel.send(
                    new MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(character.name)
                        .setAuthor(msg.author.username, avatarURL)
                        .setDescription("```" + character.description + "```")
                        .setThumbnail(character.characterAvatarUrl)
                        .addFields(
                            { name: 'Género', value: "```diff\n" + character.gender + "\n```", inline: true },
                            { name: 'Role', value: "```diff\n" + character.role + "\n```", inline: true },
                            { name: 'Nacionalidad', value: "```diff\n" + character.nationality + "\n```", inline: true },
                            { name: 'Dificultad', value: "```diff\n" + character.difficulty + "\n```", inline: true },
                        )
                        .setImage(character.characterImgUrl)
    
                        .setTimestamp()
                        .setFooter('"' + character.quote + '". -' + character.name + '', 'https://cdn2.downdetector.com/static/uploads/logo/dead-by-daylight.png')
                );
            }else{
                msg.channel.send(new MessageEmbed().setColor("RED").setDescription(lang.error.noFound.character));
            }
          

        });
    }


}