const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'f;';
const deletedMessages = new Discord.Collection();
const editedmessages = new Discord.Collection();
client.setMaxListeners(20)
require('dotenv').config();

client.login(process.env.token1);

// starting up tings
client.once('ready', () => {
    console.log('real bot online now');
    client.user.setActivity('called ur mum on big green pp');
    client.user.setUsername(`[${prefix}] Tranquiity Gifter`);
});


// bans/kicks, memberjoins
client.on('guildMemberAdd', user =>{
    const channel = user.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel) return
        channel.send(`Welcome to ${user.guild.name}, <@${user.id}>`);
});
client.on('guildMemberRemove', noobxd => {
    const channel = noobxd.guild.channels.cache.find(channel => channel.name === "general");
    channel.send(`xDDDD <@${noobxd.id}> got removed from this server lol mega pogchamp!!!`);
});


// commands
// avatar
client.on('message', msg =>{
    if (msg.author.bot) return;
    if (msg.content === `${prefix}av`) {
        if (msg.author.id === '420871370516201473') {
            const embed = new Discord.MessageEmbed()
                .setTitle('Looks Sexy 🥵 mm')
                .setImage(msg.author.displayAvatarURL({dynamic:true}))
                .setTimestamp()
                .setColor('#0CFF00');
            msg.channel.send(embed);
            } else {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Looks Sex- shit.')
                    .setImage(msg.author.displayAvatarURL({dynamic:true}))
                    .setTimestamp()
                    .setColor('#0CFF00');
                msg.channel.send(embed);
            }
    }
});
// snipe
client.on('message', async message => {
    if (message.author.bot) return;
    const args = message.content.trim().split(/\s+/g);
    const command1 = args.shift().toLowerCase();
    const msg = deletedMessages.get(message.channel.id);
    switch (command1) {
        case `${prefix}snipe`:
            if (!msg) return message.reply('could not find any deleted messages in this channel bihh').then(E => {
                setTimeout(() => {
                    E.delete()
                    message.delete().catch(E => console.error(E));
                }, 2000);
            })
            const embed = new Discord.MessageEmbed()
                .setAuthor(msg.author.tag, msg.author.avatarURL())
                .setTimestamp()
                .setDescription(msg.content);
            message.channel.send(embed).catch(err => console.error(err)).then(E => {
                setTimeout(() => {
                    E.delete()
                    message.delete().catch(E => console.error(E));
                }, 10000);
            });
    }
});
// editsnipe
client.on('message', async message => {
    if (message.author.bot) return;

    const args = message.content.trim().split(/\s+/g);
    const command = args.shift().toLowerCase();
    const msg2 = editedmessages.get(message.channel.id);
    switch (command) {
        case `${prefix}editsnipe`:
            if (!msg2) return message.reply('could not find any edited messages in this channel bihh').then(E => {
                setTimeout(() => {
                    E.delete()
                    message.delete().catch(E => console.error(E));
                }, 2000);
            })
            const embed2 = new Discord.MessageEmbed()
                .setAuthor(msg2.author.tag, msg2.author.avatarURL())
                .setTimestamp()
                .setDescription(msg2.content);
            message.channel.send(embed2).catch(err => console.error(err)).then(E => {
                setTimeout(() => {
                    E.delete()
                    message.delete().catch(E => console.error(E));
                }, 10000);
            });
    }
});
// ping
client.on('message', msg => {
    if (msg.content === `${prefix}ping`) {
        msg.channel.send("pinging fag...").then(m => {
            setTimeout(() => {
                m.edit(`discords ping doo doo [${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is. ${client.ws.ping}ms]`);
            }, 2000);
        });
    }
});
// help
client.on('message', msg => {
    if (msg.content === `${prefix}help`) {
        const embed = new Discord.MessageEmbed()
            .setTitle('this embed might help idk')
            .setDescription(`Prefix[${prefix}] \n Cmds[av | snipe | editsnipe | ping | help | massping | membercount | mute | about]`)
            .setFooter('Made By Boomers Highness#1230')
            .setColor('#0CFF00')
            .setTimestamp();
        msg.channel.send(embed);
    }
});
// massping
client.on('message', msg => {
    const kid = msg.mentions.members.first();

    if (msg.author.bot) return;
    if (msg.content.startsWith(`${prefix}massping`) || msg.content.startsWith(`${prefix}mp`)) {
        if (!kid) return msg.reply('mention someone dummmmie');
        if (kid.id === '420871370516201473') {
            msg.channel.send(`no noob uno reverse ${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}`).then((m) => {
                setTimeout(() => {
                    m.delete();
                    msg.delete();
                }, 5000)
            })
        } else {
            msg.delete().catch(F => console.error(F));
            msg.channel.send(`ha someone evil did this too you sorry | ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid} ${kid}`).then(f => {
                f.delete();
            });
        }
    }
});
// mute/unmute
client.on('message', msg => {
    const muted = msg.guild.roles.cache.find(r => r.name === 'muted');
    const mbr = msg.guild.roles.cache.find(r => r.name === 'Members');
    const kid = msg.mentions.members.first();
    const person = msg.guild.member(kid);

    if (msg.author.bot) return;
    if (msg.content.startsWith(`${prefix}mute`)) {
        if (msg.member && msg.member.roles.cache.has('860401178009403393')) {
            if (kid) {
                person.roles.add(muted);
                person.roles.remove(mbr);
                msg.channel.send(`muted ${kid}`).then(m => {
                    setTimeout(() => {
                        m.delete();
                        msg.delete();
                    }, 3000);
                })
            } else {
                msg.reply('mention a user dum bum');
            }
        } else {
            msg.reply('u are not smart enough to use this sexy command.');
        }
    }
    if (msg.content.startsWith(`${prefix}unmute`)) {
        if (msg.member && msg.member.roles.cache.has('860401178009403393')) {
            if (kid) {
                person.roles.remove(muted);
                person.roles.add(mbr);
                msg.channel.send(`unmuted ${kid}`).then(m => {
                    setTimeout(() => {
                        m.delete();
                        msg.delete();
                    }, 3000);
                })
            } else {
                msg.reply('mention a user dum bum');
            }
        } else {
            msg.reply('u are not smart enough to use this sexy command.');
        }
    }
});
// membercount 
client.on('message', msg => {
    if (msg.content === `${prefix}membercount`) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`${msg.member.guild.memberCount} ***including bots***`)
            .setTimestamp()
            .setFooter('Made By Boomers Highness');
        msg.reply(embed);
    }
});
// about 
client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content === `${prefix}about`) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`info about [${msg.author.tag}].`)
            .setDescription(`\`account created at-[${msg.author.createdAt}]\``)
            .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
            .setFooter(msg.author.id)
            .setTimestamp();
        msg.channel.send(embed);
    }
});
client.on('messageDelete', message => {
    if (message.author.bot) return;
    deletedMessages.set(message.channel.id, message);
});
client.on('messageUpdate', message => {
    if (message.author.bot) return;
    editedmessages.set(message.channel.id, message);
});
// end of commands ^


// logs
client.on('messageDelete', msgdel =>{
    if (msgdel.author.bot) return;
    console.log(`${msgdel.author.username}[${msgdel.author}] deleted - ["${msgdel.content}"] - [${msgdel.guild.name}[id-${msgdel.guild.id}] | channel [${msgdel.channel.name}] | ${msgdel.createdAt.toLocaleTimeString()} | ${msgdel.createdAt.toLocaleDateString()}] [deleted message]`);
});
client.on('messageUpdate', (newMessage, oldMessage) =>{
    if (oldMessage.author.bot) return;
    console.log(`${newMessage.author.username}[${newMessage.author}] edited - before[${newMessage.content}] after[${oldMessage.content}] - [${newMessage.guild.name}[id-${newMessage.guild.id}] | channel [${newMessage.channel.name}] | ${newMessage.createdAt.toLocaleTimeString()} | ${newMessage.createdAt.toLocaleDateString()}] [edited message]`)
});
client.on('message', msg => {
    if (msg.author.bot) return;
    console.log(`${msg.author.username}[${msg.author}] said ["${msg.content}"] in ${msg.guild.name}[id-${msg.guild.id}] | channel [${msg.channel.name}] | ${msg.createdAt.toLocaleTimeString()} | ${msg.createdAt.toLocaleDateString()}] [message]`)
});
// end of logs ^


// memes
client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content.includes('<@!420871370516201473>')){
            msg.react('🖕')
        }
});
// no links n3rd
client.on('message', msg =>{
    const server = client.guilds.cache.get('860397277306814535');
    if (!server) return;
    if (msg.author.id === '420871370516201473') return;
    if (msg.member  &&  msg.member.roles.cache.has("865355545044844604")) {
       return;
    } else {
        if (msg.content.includes("https://")) {
            msg.reply('no links dummie').then(E => {
                setTimeout(() => {
                    E.delete()
                }, 2000);
            })
            msg.delete().catch(err => console.error(err));
        }
        if (msg.content.includes("http://")) {
            msg.reply('no links dummie').then(E => {
                setTimeout(() => {
                    E.delete()
                }, 2000);
            })
            msg.delete().catch(err => console.error(err));
        }   
    }
});
// end of no links
client.on('message', msg =>{
    if (msg.author.bot) return;
    if (msg.content === 'f') return msg.react('🇫');
});
// end of memes





