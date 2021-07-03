const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const preflix = '*';




client.once('ready', () => {
   console.log('real bot online now')
    client.user.setActivity('*av is only cmd  -  manifesting boomers highness smashing girls that i like')
});

client.on('guildMemberAdd', user =>{
    const channel = user.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel) return
    channel.send(`Welcome to Chasings Rabbit Hole, <@${user.id}>`)
});

client.on('message', msg =>{
    if (msg.author.id === client.user.id) return
        if (msg.content === `${preflix}av`) {
            const embed = new Discord.MessageEmbed()
                .setTitle('Looks Grea- shit.')
                .setImage(msg.author.displayAvatarURL())
                .setColor('#0CFF00')
                .setFooter('Made By Boomers Highness#1230')
                .setTimestamp()
            msg.channel.send(embed);
        }
});

client.on('messageDelete', msgdel =>{
    if(msgdel.author.bot){
        console.log(`${msgdel.content} - ${msgdel.author} - [${msgdel.guild.name}, ${msgdel.channel.name}] [deleted message BOT]`);
    } else {
        console.log(`${msgdel.content} - ${msgdel.author} - [${msgdel.guild.name}, ${msgdel.channel.name}] [deleted message]`);
    }
    
});

client.on('messageUpdate', msgupd =>{
    if(msgupd.author.bot){
        console.log(`${msgupd.content} - ${msgupd.author} - [${msgupd.guild.name}, ${msgupd.channel.name}] [edited message BOT]`)
    } else {
        console.log(`${msgupd.content} - ${msgupd.author} - [${msgupd.guild.name}, ${msgupd.channel.name}] [edited message]`)
    }
    
});

client.on('message', msg => {
    if(msg.author.bot){
        console.log(`${msg.content} - ${msg.author} - [${msg.guild.name}, ${msg.channel.name}] [message BOT]`)
    } else {
        console.log(`${msg.content} - ${msg.author} - [${msg.guild.name}, ${msg.channel.name}] [message]`)
    }
    
});

client.on('message', msg => {
    if (msg.author.id === client.user.id) return
    if (msg.content.includes('<@!420871370516201473>')){
            msg.react('🖕')
        }
});

client.on('message', msg =>{
    if (msg.author.id === client.user.id) return
        if (msg.content == 'f') {
            msg.channel.send('f')    
        }
});

client.login(process.env.token);






