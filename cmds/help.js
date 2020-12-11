const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
   
    let embed = new Discord.RichEmbed()
    .setTitle('Использование команд:')
    .addField("(выключено)!ban","!ban Участник Причина")
    .addField("(выключено)!clear","!clear 1-100")
    .addField("(выключено)!kick","!kick Участник Причина")
    .addField("(выключено)!mute","!mute Участник Время(в секундах) Причина")
    .addField("!roll-генератор случайных чисел","!roll максимальное число(при больших значениях результаты могут стать странными)")
    .addField("!serverinfo","Информация о сервере")
    .addField("(выключено)!profile-отображает профиль пользователя","!profile (будет введена возможность просмотра профиля других людей)")
    .addField("!(выключено)unmute","!unmute Участник")
    .addField("(выключено)!unwarn","!unwarn Участник ")
    .addField("!userinfo","Информация о участнике")
    .addField("(выключено)!warn","!warn Участник Причина")
    
    message.channel.send(embed);
};
module.exports.help = {
    name: "help"
};