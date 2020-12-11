const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(message.author.tag !== 'Fairon#1658') return message.channel.send("У вас нет прав");
    
    
    let channel = args.slice(1).join(' ');
    let botmessage = args.slice(2).join(' ');
    
    let channelid = bot.channels.get(`${channel}`);
    message.delete().catch();
    channelid.send(botmessage);
};
module.exports.help = {
    name: "send"
};
