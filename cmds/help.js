const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
   
    let embed = new Discord.RichEmbed()
    .setTitle('Использование команд:')
    .addField("!ban","!ban Участник Причина")
    .addField("!clear","!clear 1-100")
    .addField("!kick","!kick Участник Причина")
    .addField("!mute","!mute Участник Время(в секундах) Причина")
    .addField("!ping","!ping-команда для проверки работоспособности бота")
    .addField("!serverinfo","Информация о сервере")
    .addField("!soup","Призывает священный ролик О ВЕЛИКИЙ СУП НАВАРИЛИ!")
    .addField("!unmute","!unmute Участник")
    .addField("!unwarn","!unwarn Участник ")
    .addField("!userinfo","Информация о участнике")
    .addField("!warn","!warn Участник Причина")
    
    message.channel.send(embed);
};
module.exports.help = {
    name: "help"
};