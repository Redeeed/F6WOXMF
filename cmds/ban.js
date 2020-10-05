const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    
      
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("У вас нет прав");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])); // участник
    if(!args[0]) return bot.send("Вы не указали пользователя");
    
    let reason = args.slice(1).join(' ') || 'Не указана' // причина
    let embed = new Discord.RichEmbed()
    .setDescription("Бан")
    .setColor('#e22216')
    .addField("Модератор:",message.author.tag)
    .addField("Забанил:",`${rUser.user.tag}`)
    .addField('Причина:', `${reason}`,true)
    .setTimestamp();
    
    message.guild.member(rUser).ban(reason);
    message.channel.send(embed);
    
    

};
module.exports.help = {
    name: "ban"
};