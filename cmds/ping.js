const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('https://cdn.discordapp.com/attachments/683679656624390188/738784591132753970/20200730_095656.jpg');
};
module.exports.help = {
    name: "ping"
};