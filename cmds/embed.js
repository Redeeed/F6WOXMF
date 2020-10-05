const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(message.author.tag !== 'Fairon#1658') return message.channel.send("У вас нет прав");
     
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setTitle(botmessage)
    .setColor('#0082ff');
    message.delete().catch();
    message.channel.send(embed);
};
module.exports.help = {
    name: "embed"
};