const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о участнике")
    .setColor('#10c7e2')
    .addField("Ник:",a.username)
    .addField("Полный ник:",a.tag)
    .addField("Тег:",a.discriminator)
    .addField("Создание аккаунта:",a.createdAt)
    .addField("ID",a.id)
    
    .setThumbnail(a.avatarURL)

    bot.send(embed);

};
module.exports.help = {
    name: "userinfo"
};