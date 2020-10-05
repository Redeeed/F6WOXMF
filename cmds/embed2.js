const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let Ferra = 672150319408349186
    if(message.author.id !== Ferra) return message.channel.send("У вас нет прав");
     
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setDescription(botmessage)
    .setColor('#0da8e4');
    message.delete().catch();
    message.channel.send(embed);
};
module.exports.help = {
    name: "embed2"
};