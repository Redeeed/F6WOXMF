const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])) // участник
    if(!args[0]) return bot.send("Вы не указали пользователя");
    
    if(!profile[rUser.id])return bot.send("Пользователя нету в profile.json");
    profile[rUser.id].warns +=1;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    if(profile[rUser.id].warns >=5){
        message.guild.member(rUser).kick("5/5 Предупреждений");
    }
    let reason = args.slice(1).join(' ') || 'Не указана' // причина
    let embed = new Discord.RichEmbed()
    .setDescription("Предупреждение")
    .setColor('#e22216')
    .addField("Модератор:",message.author.tag)
    .addField("Выдал предупреждение:",`${rUser.user.tag}`)
    .addField("Причина:",`${reason}`)
    .addField("Количество предупрежденией:",`${profile[rUser.id].warns}/5`);

    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "warn"
};