const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});
const prefix = 'f;';
const deletedMessages = new Discord.Collection();
const editedmessages = new Discord.Collection();
client.setMaxListeners(20)
require('dotenv').config();

client.login(process.env.token1);

// starting up tings
client.once('ready', () => {
    console.log('real bot online now');
    client.user.setStatus('dnd');
});


// commands
// prefix help
client.on('message', msg => {
    if(msg.author.bot) return;
    if(msg.content == prefix){
        msg.reply('do the right command dog cunt ba\ni am ur father ogday');
        msg.channel.send(`*${prefix}help*`)
    }
});
// meme
client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content == `${prefix}meme`) {
        const embed = new Discord.MessageEmbed()
        .addFields({ name: ';)', value: '*you are the meme*', inline: true },)
        .setThumbnail(msg.author.displayAvatarURL({dynamic:true}))
        msg.channel.send(embed)
    }
});
// avatar
client.on('message', msg =>{
    const kid = msg.mentions.members.first();
    const args = msg.content.trim().split(/\s+/g);
    const command1 = args.shift().toLowerCase();
    if (msg.author.bot) return;
    if (command1 === `${prefix}av`) {
        if (!kid) {
            const embed = new Discord.MessageEmbed()
                .setTitle('this is you lmao')
                .setImage(msg.author.displayAvatarURL({ size: 1024, dynamic: true }))
                .setColor('#0CFF00');
            msg.channel.send(embed);
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle('this is the person lmao')
                .setImage(kid.user.displayAvatarURL({ size: 1024, dynamic: true }))
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
            message.channel.send().catch(err => console.error(err)).then(() => {
                setTimeout(() => {
                   
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
            message.channel.send(embed2).catch(err => console.error(err)).then(() => {
                setTimeout(() => {
                   
                    message.delete().catch(E => console.error(E));
                }, 10000);
            });
    }
});
// ping
client.on('message', msg => {
    if(msg.author.bot)return;
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
            .setDescription(`Prefix[${prefix}] \n Cmds[kick | id | av | snipe | editsnipe | ping | help | massping | membercount | mute | about]`)
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
        if (!kid) return msg.reply('mention someone dummmmie').then(d =>{ 
            setTimeout(() => {
                d.delete();
                msg.delete().catch(err => console.error(err)); 
            }, 3000); 
        });
        if (kid.id === '420871370516201473') {
            msg.channel.send(`no noob uno reverse ${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}${msg.author}`).then((m) => {
                m.delete();
                msg.delete().catch(err => console.error(err));
            });
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
    const muted = msg.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');
    const mbr = msg.guild.roles.cache.find(r => r.name.toLowerCase() === 'members');
    const kid = msg.mentions.members.first();
    const person = msg.guild.member(kid);

    if (msg.author.bot) return;
    if (msg.content.startsWith(`${prefix}mute`)) {
        if (msg.member && msg.member.hasPermission('MUTE_MEMBERS')) {
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
        if (msg.member && msg.member.hasPermission('MUTE_MEMBERS')) {
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
    let memberCount = msg.guild.members.cache.filter(member => !member.user.bot).size;
    if (msg.author.bot) return;
    if (msg.content === `${prefix}membercount`) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`${memberCount}`)
            .setTimestamp()
            .setFooter('Made By Boomers Highness');
        msg.reply(embed);
    }
});
// about 
client.on('message', msg => {
    const kid = msg.mentions.members.first();
    const args = msg.content.trim().split(/\s+/g);
    const command = args.shift().toLowerCase();

    if (msg.author.bot) return;
    if (command === `${prefix}about`) {
        if (!kid) {
            const embed = new Discord.MessageEmbed()
                .setTitle(`info about [you].`)
                .setAuthor(`nickname "${msg.member.nickname}"`)
                .setImage(msg.author.displayAvatarURL({ size: 256, dynamic: true }))
                .addFields(
                    { name: 'account created on', value: `\`${msg.author.createdAt.toLocaleString()}\``},
                    { name: 'account joined on', value: `\`${msg.member.joinedAt.toLocaleString()}\``},
                    { name: 'boosted server since', value: `\`${msg.member.premiumSince}\``},
                    { name: 'flags', value: `\`${msg.member.user.flags.toArray()}\`` },
                    { name: 'roles', value: `${msg.member.roles.cache.array()}`, inline: true },
                )
                .setColor(`${msg.member.roles.highest.hexColor}`)
                .setFooter(msg.author.id)
                .setTimestamp();
            msg.channel.send(embed).catch(err => console.error(err));
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle(`info about [@${kid.user.tag}].`)
                .setAuthor(`nickname "${kid.nickname}"`)
                .setImage(kid.user.displayAvatarURL({ size: 256, dynamic: true }))
                .addFields(
                    { name: 'account created on', value: `\`${kid.user.createdAt.toLocaleString()}\`` },
                    { name: 'account joined on', value: `\`${kid.joinedAt.toLocaleString()}\`` },
                    { name: 'boosted server since', value: `\`${kid.premiumSince}\`` },
                    { name: 'flags', value: `\`${kid.user.flags.toArray()}\`` },
                    { name: 'roles', value: `${kid.roles.cache.array()}`, inline: true },
                )
                .setColor(`${kid.roles.highest.hexColor}`)
                .setFooter(kid.user.id)
                .setTimestamp();
            msg.channel.send(embed).catch(err => console.error(err));
        }
    }
});
// kick
client.on('message', msg => {
    const kid = msg.mentions.users.first();
    const member = msg.guild.member(kid);
    if (msg.author.bot) return;
    if (msg.content.startsWith(`${prefix}kick`)) {
        if (msg.member && msg.member.hasPermission('KICK_MEMBERS')) {
            if (member) {
                member.kick().then(() =>{
                    msg.reply(`kicked - ${member}`).then(E => {
                        setTimeout(() => {
                            E.delete();
                            msg.delete();
                        }, 5000);
                    })
                })
            } else {
                msg.reply('mention someone cuh').then(E => {
                    setTimeout(() => {
                        E.delete();
                        msg.delete();
                    }, 5000);
                })
            }
        } else {
            msg.reply('you sir stop right there dumbass, u cant use this command cuz u aint powerful enough ;)').then(E => {
                setTimeout(() => {
                    E.delete();
                    msg.delete();
                }, 5000);
            })
        }
    }
});
//ban 
// client.on('message', msg => {
//     const kid = msg.mentions.users.first();
//     const member = msg.guild.member(kid);
//     if (msg.author.bot) return;
//     if (msg.content.startsWith(`${prefix}ban`)) {
//         if (msg.member && msg.member.hasPermission('BAN_MEMBERS')) {
//             if (member) {
//                 member.ban().then(() => {
//                     msg.reply(`banned - ${member}`).then(E => {
//                         setTimeout(() => {
//                             E.delete();
//                             msg.delete();
//                         }, 5000);
//                     })
//                 })
//             } else {
//                 msg.reply('mention someone cuh').then(E => {
//                     setTimeout(() => {
//                         E.delete();
//                         msg.delete();
//                     }, 5000);
//                 })
//             }
//         } else {
//             msg.reply('you sir stop right there dumbass, u cant use this command cuz u aint powerful enough ;)').then(E => {
//                 setTimeout(() => {
//                     E.delete();
//                     msg.delete();
//                 }, 5000);
//             })
//         }
//     }
//     if (msg.content.startsWith(`${prefix}unban`)) {
//         if (msg.member && msg.member.hasPermission('BAN_MEMBERS')) {
//             if (member) {
//                msg.guild.fetchBans().then(penis =>{
                   
//                })
//             } else {
//                 msg.reply('mention someone cuh').then(E => {
//                     setTimeout(() => {
//                         E.delete();
//                         msg.delete();
//                     }, 3000);
//                 })
//             }
//         } else {
//                 msg.reply('you sir stop right there dumbass, u cant use this command cuz u aint powerful enough ;)').then(E => {
//                     setTimeout(() => {
//                         E.delete();
//                         msg.delete();
//                 }, 5000);
//             })
//         }
//     }
// });

// id show
client.on('message', msg => {
    const kid = msg.mentions.users.first();
    const member = msg.guild.member(kid);
    if (msg.author.bot) return;
    if (msg.content.startsWith(`${prefix}id`)) {
        if (member) {
            msg.reply(`this is ${member}'s id - \`${member.user.id}\``);
        } else {
            msg.reply(`\`${msg.member.valueOf()}\``);
        }
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
    console.log(`${msgdel.author.tag}[${msgdel.author}] deleted - ["${msgdel.content}"] - [${msgdel.guild.name}[id-${msgdel.guild.id}] | channel [${msgdel.channel.name}] | ${msgdel.createdAt.toLocaleTimeString()} | ${msgdel.createdAt.toLocaleDateString()}] [deleted message]`);
});
client.on('messageUpdate', (newMessage, oldMessage) =>{
    if (oldMessage.author.bot) return;
    console.log(`${newMessage.author.tag}[${newMessage.author}] edited - before[${newMessage.content}] after[${oldMessage.content}] - [${newMessage.guild.name}[id-${newMessage.guild.id}] | channel [${newMessage.channel.name}] | ${newMessage.createdAt.toLocaleTimeString()} | ${newMessage.createdAt.toLocaleDateString()}] [edited message]`)
});
client.on('message', msg => {
    if (msg.author.bot) return;
    console.log(`${msg.author.tag}[${msg.author}] said ["${msg.content}"] in ${msg.guild.name}[id-${msg.guild.id}] | channel [${msg.channel.name}] | ${msg.createdAt.toLocaleTimeString()} | ${msg.createdAt.toLocaleDateString()}] [message]`)
});
// end of logs ^


// memes
client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content.includes('<@!420871370516201473>')){
        if (msg.author.id === '420871370516201473') {
            msg.react('👍');
        } else {
            msg.react('🖕');
        }
    }
});
// no links n3rd
client.on('message', msg =>{
    if (msg.author.id === '420871370516201473' || msg.author.id === '788646324219281410') return;
    if (msg.member && msg.member.hasPermission('ADMINISTRATOR') || msg.member && msg.member.roles.cache.has('865355545044844604')) {
       return;
    } else {
        if (msg.content.includes("https://") || msg.content.includes("discord.gg/") || msg.content.includes("http://")) {
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
