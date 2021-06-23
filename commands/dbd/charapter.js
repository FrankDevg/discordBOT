//estructura con argumentos 
const commands = require('../../commands.js')
const lang = require('../../util.js').getLanguage();
const dbdCharapterService = require('../../services/dbdservice/dbdCharapter-service');
const dbdPerkService = require('../../services/dbdservice/dbdPerk-service');
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');


//heredo la estructura de la clase commands y le pasamos los valores
module.exports = class CharapterCommand extends commands.Command {
    constructor() {
        super({
            name: 'charapter',
            aliases: [],
            args:[
                new commands.Argument({
                    optional: false,
                    missingError:lang.error.noArgs.arg,
                    invalidError:lang.error.incoArgs.text,

                })
            ],
            category: 'dbd',
            priority: 9,
            permLvl:1


        })
    }
    execute(msg,args) {
        //dbdPerkService.savePerk(msg,args);
       dbdCharapterService.getCharapter(msg,args).then((charapter)=>{
        console.log(charapter._id);
        let avatarURL = (msg.author.avatarURL()) ? msg.author.avatarURL() : 'https://th.bing.com/th/id/OIP.QGjlnckx4xMewe5flHMPpgHaFC?pid=ImgDet&rs=1';

        msg.channel.send(
            new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(charapter.name)
	.setAuthor(msg.author.username, avatarURL)
	.setDescription("```"+charapter.description+"```")
	.setThumbnail(charapter.characterImgUrl)
	.addFields(
		{ name: 'Género', value: "```diff\n"+charapter.gender+"\n```" , inline: true},
		{ name: 'Role', value: "```diff\n"+charapter.role+"\n```", inline: true },
		{ name: 'Nacionalidad', value: "```diff\n"+charapter.nationality+"\n```", inline: true },
		{ name: 'Dificultad', value: "```diff\n"+charapter.difficulty+"\n```", inline: true },
	)
	.setImage('https://i.pinimg.com/originals/67/79/3b/67793b5be07cf847a3dcdbaee66e9ce8.jpg')

	.setTimestamp()
	.setFooter('"Los conocimientos básicos de botánica podrían salvar tu vida algún día". - Claudette Morel', 'https://cdn2.downdetector.com/static/uploads/logo/dead-by-daylight.png')
        );

       });
    }


}