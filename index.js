require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () =>{
    console.log(`Bot está listo como: ${bot.user.tag}`);
});

//Para recibir el mensaje
bot.on('message', async (message) => {
    console.log(message.content);
    
    if (message.content === 'Hola'){
        message.channel.send(`Que pedo ${message.author}.`);
    }

    if (message.content === '!cls'){
        const fetched = await message.channel.fetchMessages({limit:100});
        message.channel.bulkDelete(fetched);
    }
});


bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(ch => ch.name === 'general');
    if (!channel) return;

    channel.send(`Bienvenido prro: ${member}`);
});

bot.login(process.env.KEY_DISCORD);