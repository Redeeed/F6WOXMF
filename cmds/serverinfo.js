const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor('#10c7e2')
    .addField("Название сервера:",message.guild.name)
    .addField("Дата создание сервера:",message.guild.createdAt)
    .addField("Вы зашли на сервер в:",message.guild.joinedAt)
    .addField("Количество участников:",message.guild.memberCount)
    .addField("Регион:",message.guild.region)
    .setThumbnail(message.guild.iconURL)

    bot.send(embed);

};
module.exports.help = {
    name: "serverinfo"
};