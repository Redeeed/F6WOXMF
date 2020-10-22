const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(message.author.tag !== 'Fairon#1658') return message.channel.send("У вас нет прав");
     
    let botmessage = args.join(" ");
    let channelid = bot.channels.get("756211020342755451");
    message.delete().catch();
    channelid.send(botmessage);
};
module.exports.help = {
    name: "send"
};
