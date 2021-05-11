const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const client = new Client();
const config = require('./util.js').getConfig()[1];
const util = require('./util.js');
var mongoose = require('mongoose');
const fs = require('fs');


require('dotenv').config();
//coneccion base de datos
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log(".....connection to database elbot established.....");

}).catch(err => {
    console.log(`db error ${err.message}`);
    process.exit(-1)
});

for (let file of fs.readdirSync('./events/')) {
    if (file.endsWith('.js')) {
        let fileName = file.substring(0, file.length - 3);
        let fileContents = require(`./events/${file}`);
        client.on(fileName, fileContents.bind(null, client))
        delete require.cache[require.resolve(`./events/${file}`)]
    }

}



client.login(process.env.CLIENT_TOKEN);

