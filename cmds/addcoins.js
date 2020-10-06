const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("У вас нет прав");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])) // участник
    if(!args[0]) return bot.send("Вы не указали пользователя");
    let number =  args.slice(1).join(' ')
    
    if(!profile[rUser.id])return bot.send("Пользователя нету в profile.json");
    profile[rUser.id].coins +=100;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    
    let embed = new Discord.RichEmbed()
    .setDescription("Добавлены монеты")
    .setColor('#e22216')
    .addField("Участник:",message.author.tag)
    .addField("Выдал монеты :",`${rUser.user.tag}`)
    .addField("Количество:",`${number}`)
    .addField("Баланс пользователя:",`${profile[rUser.id].coins}`);

    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "ac"
};