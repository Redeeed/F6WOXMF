const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
   
    let embed = new Discord.RichEmbed()
    .setTitle('Использование команд:')
    .addField("!ban-забанить пользователя","!ban Участник Причина")
    .addField("!clear-очистить сообщения","!clear 1-100")
    .addField("!kick-выгнать пользователя","!kick Участник Причина")
    .addField("!mute-заглушить пользователя","!mute Участник Время(в секундах) Причина")
    .addField("!ping","!ping-команда для проверки работоспособности бота")
    .addField("!serverinfo","Информация о сервере")
    .addField("!unmute-снимает мут","!unmute Участник")
    .addField("!unwarn-снять предупреждение","!unwarn Участник ")
    .addField("!userinfo","Информация о участнике")
    .addField("!warn-выдать предупреждение","!warn Участник Причина")
    
    message.channel.send(embed);
};
module.exports.help = {
    name: "help"
};