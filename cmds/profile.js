const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    let uid = message.author.id
    let u = profile[uid]
    let embed = new Discord.RichEmbed()
    .setDescription("Профиль:")
    .addField("Предупреждения:", `${profile[rUser.id].warns}/5`)
    .addField("Монеты:",`${profile[rUser.id].coins}`)
    message.channel.send(embed);




};
module.exports.help = {
    name: "profile"
};