if(message.content.startsWith(prefix + "mute")){
    if(!message.member.hasPermission("MANAGE_MEMBERS"))return(message.reply("you need **Manage members** permission to do that"))//смотрим, есть ли у автора разрешение на управление участниками
    let tomute = message.mentions.members.first()//объявляем того кого будем затыкать
    if(!tomute)return(message.reply("please mention a member to mute"))//проверка на строку выше
    let muterole = message.guild.roles.find(`name`, "Muted")//поиск роли на вашем сервере, поэтому лучше сразу создайте и настройте в каналах
    if(!muterole)return(message.reply("please create a role called **Muted**"))//проверка на существование роли, если ее нет - напишет что вам нужно ее создать

    let mutetime = args[2]
    if(!mutetime)return(message.reply("please specify a time"))

    tomute.addRole(muterole.id).catch(console.log("Role was added lul"))//добавляем участнику которого тагнули нашу роль
    message.channel.send(`Muted ${tomute.user.tag}|${tomute.user.id} for ${ms(ms(mutetime))}`)//отправляем в канал инфу о том, кого замутили и на сколько

    setTimeout(function(){
      tomute.removeRole(muterole.id)
      message.channel.send(`${tomute.user.tag}|${tomute.user.id} has been unmuted after being in mute for ${ms(ms(mutetime))}`)
    }, ms(mutetime))//ставим таймер на время мута, по истечению роль будет снята автоматом
  }