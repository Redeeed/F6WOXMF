const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(message.author.tag !== 'Fairon#1658') return message.channel.send("У вас нет прав");
     
    let botmessage = args.slice(2).join(' ');
    let rUser = message.guild.member( message.guild.members.find(m => m.user.username == args[0] || m.id == args[0])) // участник
    message.delete().catch();
    rUser.send(botmessage);
};
module.exports.help = {
    name: "dm"
};