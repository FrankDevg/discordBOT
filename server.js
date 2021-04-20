const {Client, MessageEmbed, MessageAttachment  } = require('discord.js');
const client = new Client();
const embed = new MessageEmbed()
const config = require('./util.js').getConfig()[1];
const util =require('./util.js');
require('dotenv').config();
var url = new String();
client.on('ready',()=>{
    console.log(`Bot is ready! as ${client.user.tag}`);
});

client.on('message',message=>{    
    console.log(message.channel.name);  
    if(message.author.bot)return;
    let prefix = config.prefix;
    let args;
    if(message.content.startsWith("ping")){
        // if(!args) return message.channel.send('Ingrese un mensaje'); check args ya con funcion
        util.getSend(message, 'pong con el prefix del bot:' +prefix + ''+message.author.id);
    }

    switch (message.content) {
        case '!meme1':
            url ='831187746986000424/831187760425074708/images.png';  
           sendMemeUrl(url ,message);

            break;

        case '!meme2':     
          url ='831187746986000424/831188368359424020/latest.png'; 
          sendMemeUrl(url ,message);

          break;
        
        case '!meme3':
            url ='831187746986000424/831188848485990410/latest.png';     
            sendMemeUrl(url ,message);

            break;
        case '!meme4':
            url ='831187746986000424/831189237796962344/89592b3392fee110134235e95d80dbf7.png';        

            sendMemeUrl(url ,message);

            break;
        case '!meme5':
            url ='831187746986000424/831188523083497563/Screenshot_20210407-081547.png'; 
            sendMemeUrl(url ,message);

            break;
        case '!meme6':
         url ='831187746986000424/831190042264338462/31323306.png'; 
         sendMemeUrl(url ,message);


          break;
        case '!meme7':
            url ='831187746986000424/831190274448818206/56467747.png'; 
            sendMemeUrl(url ,message);

              break;
        case '!meme8':
            url ='831187746986000424/831190578871271464/85748bd766bfc2bd21535360a76f144a.png'; 
            sendMemeUrl(url ,message);

            break;
        case '!meme9':
            url ='831187746986000424/831192471534436422/untitled1-900x485.png'; 
            sendMemeUrl(url ,message);
            break;
        case '!meme10':
            url ='831187746986000424/831193209329680434/dorime11576397150.png'; 
            sendMemeUrl(url ,message);
            break;
            case '!memes':
                url='';
                sendMemeUrl(url ,message);
          default:
             break;

      }    
   
    

    
});
function sendMemeUrl(url ,message) {
    if(message.channel.name==='👽-memes'||message.channel.name==='testbots'){
        if(message.content==='!memes'){
            message.channel.send(new MessageEmbed().setColor('ORANGE')
            .addField('Ya estoy art@','comando: !meme1')
            .addField('Khe verga','comando: !meme2')
            .addField('Que oferton','comando: !meme3')
            .addField('No puede ser','comando: !meme4')
            .addField('Eres una mesa','comando: !meme5')
            .addField('Tas Bien','comando: !meme6')
            .addField('Habla pues','comando: !meme7')
            .addField('Pos alemerga','comando: !meme8')
            .addField('brutal','comando: !meme9')
            .addField('Dorime','comando: !meme10')
            );
        }else
        {
            let avatarURL  =(message.author.avatarURL() ) ? message.author.avatarURL() : 'https://th.bing.com/th/id/OIP.QGjlnckx4xMewe5flHMPpgHaFC?pid=ImgDet&rs=1';
            message.channel.send(new MessageEmbed().setColor(0x02b9ba).setAuthor("" + message.author.username,""+avatarURL).setImage('https://cdn.discordapp.com/attachments/'+url));

        }
          
    }else {
        message.channel.send(new MessageEmbed().setColor('RED')
        .addField('Canal de texto incorrecto','el bot se lo puede usar en el canal de texto: 👽-memes'));
    }
}
    

client.login(process.env.CLIENT_TOKEN);

