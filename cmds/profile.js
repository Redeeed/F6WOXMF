const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    
      
    
   
    if(!args[0]) return bot.send("Вы не указали пользователя");
    
    if(!profile[rUser.id])return bot.send("Пользователя нету в profile.json");

    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
   
    
    let embed = new Discord.RichEmbed()
    .setTitle("Профиль")
    .addField("Количество предупрежденией:",`${profile[rUser.id].warns}/5`)
    .addField("Монет:", `${profile[rUser.id].coins}`);

    message.channel.send(embed);
    
};
module.exports.help = {
    name: "profile"
};