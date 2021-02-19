const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
    let dil = db.fetch(`sunucudili_${message.guild.id}`)
    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix    
      let bakım = db.fetch(`bakım`) 
      if(bakım == "bakımda") {
            if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
    if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
  }else{
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
if(dil == "TR") {
  const embed = new Discord.MessageEmbed()
  .setAuthor(`Bir Sunucudan Atıldım`)
  .addField(`Sunucunun adı`, message.guild.name)
  .addField(`Sunucunun Id'si`, message.guild.id)
  .addField(`Sunucudaki kişi sayısı`, message.guild.memberCount)
  .addField(`Sunucunun bölgesi`, message.guild.region)
  .addField(`Kanallar | Roller`, `${message.guild.channels.cache.size} ${message.guild.roles.cache.size}`)
  .addField(`Kuruluş zamanı`, `${message.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.guild.createdAt)})`)
  .addField(`Toplam | Üyeler | Botlar`, `${message.guild.members.cache.size} | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`)
  .setThumbnail(message.guild.iconURL())
  message.channel.send(embed)
}
    if(dil == "EN") {
        const embed = new Discord.MessageEmbed()
  .setAuthor(`Bir Sunucudan Atıldım`)
  .addField(`Server name`, message.guild.name)
  .addField(`Server id`, message.guild.id)
  .addField(`Total users`, message.guild.memberCount)
  .addField(`Server's region`, message.guild.region)
  .addField(`Channels | Roles`, `${message.guild.channels.cache.size} ${message.guild.roles.cache.size}`)
  .addField(`Kuruluş zamanı`, `${message.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.guild.createdAt)})`)
  .addField(`Toplam | Üyeler | Botlar`, `${message.guild.members.cache.size} | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`)
  .setThumbnail(message.guild.iconURL())
  message.channel.send(embed)
    }
}

}