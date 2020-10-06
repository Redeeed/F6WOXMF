const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(message.author.tag !== `SeMarcelo#0007`) return message.channel.send("У вас нет прав");
     
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setDescription(botmessage)
    .setColor('#D6680E');
    message.delete().catch();
    message.channel.send(embed);
};
module.exports.help = {
    name: "embed3"
};