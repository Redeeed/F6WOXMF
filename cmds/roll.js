const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!args[0]) return bot.send("Вы не указали число");
    let args2 = (!args)
    if(args2 < 0) return bot.send("Кубик полетел в 4 измерение(выпало отрицательное число")

    
    
     
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