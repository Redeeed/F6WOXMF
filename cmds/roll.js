const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {

    
    
     
    let number = args.join(" ");
    let answer = (Math.floor(Math.random() * number+1))
    let embed = new Discord.RichEmbed()
    
    .setTitle(`Вам выпало число:`)
    .setDescription(answer)
    .addField("Запросил:", `${message.author.tag}`);
    
    message.channel.send(embed);
};
module.exports.help = {
    name: "roll"
};