const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
   
    let embed = new Discord.RichEmbed()
    .setColor('#0082ff')
    .setDescription("Fairon#1658")
    
    

    message.channel.send(embed);
};
module.exports.help = {
    name: "author"
};