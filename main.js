const Discord = require('discord.js');
const client = new Discord.Client();
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
    if(msgdel.author.id === client.user.id){
        console.log(`${msgdel.content} - ${msgdel.author} - [${msgdel.guild.name}] [deleted message]`);
    } else {
        null
    }
    if (msgdel.content.length >= 256) {
        msgdel.channel.send('no spamig dumbutt')
    }
       
         
          
});

client.on('messageUpdate', msgupd =>{
    if (msgupd.author.id === client.user.id) {
        console.log(`${msgupd.content} - ${msgupd.author} - [${msgupd.guild.name}] [edited message]`)
    }
     else {
            null
        }
        if (msgupd.content.length >= 256) {
            msgupd.channel.send('no spamig dumbutt')
        }
  
});

client.on('message', msg => {
    if (msg.author.id === client.user.id) return
        if (msg.content.length >= 256) {
            msg.channel.send('no spamig dumbutt')
        } else {
            console.log(`${msg.content} - ${msg.author} - [${msg.guild.name}] [message]`)
    }
    if (msg.author.bot) {
        null
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

client.login('Nzg4NjQ2MzI0MjE5MjgxNDEw.X9miIA.0krR - KrlVr_YhygeG8req - 1fiCI');






