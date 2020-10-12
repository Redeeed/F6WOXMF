const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(message.author.tag !== `Raizer#7917`) return message.channel.send("У вас нет прав");
     
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setDescription(botmessage)
    .setColor('#C0C0C0');
    message.delete().catch();
    message.channel.send(embed);
};
module.exports.help = {
    name: "embed4"
};