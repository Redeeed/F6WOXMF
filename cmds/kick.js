const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])) // участник
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Недостаточно прав для использования команды!') // чек прав
    else if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('У меня недостаточно прав!') // чек прав у участника

    let reason = args.slice(1).join(' ') || 'Не указана' // причина
    await member.kick(reason) // кик
  
    let embed = new Discord.RichEmbed()
    .setTitle('Кик', true)
    .setColor('#e22216')
    .addField('Модератор:', `${message.author.tag}`)
    .addField('Кикнул:', `${member.user.tag}`)
    .addField('Причина:', `${reason}`)
    .setTimestamp()
    await message.channel.send(embed)

}

module.exports.help = {
    name: 'kick'
}
