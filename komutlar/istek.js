const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
    let dil = db.fetch(`sunucudili_${message.guild.id}`)
    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix    
    let kanal = message.guild.channels.cache.find(c => c.id === "810750526106763324")
      let bakım = db.fetch(`bakım`) 
      if(bakım == "bakımda") {
            if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
    if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
  } else {
    let istek;
      if(args[0]) {
   istek = args.slice(0).join(' '); 
} else {
  if(dil = "TR") {return message.channel.send(`Lütfen isteğinizi yazınız.`)}
  if(dil = "EN") {return message.channel.send(`Please write your request.`)}
}
    if(dil = "TR") {
      message.channel.send(`İsteğiniz başarıyla sistemimize bildirilmiştir. En yakın zamanda eklenecektir.`)
      
      const embed = new Discord.MessageEmbed()
      .setTitle(`İstek bildirim sistemi`)
      .setDescription(`
**İsteği gönderen kişi :** ${message.author}
**Gönderdiği sunucu :** ${message.guild.name}
**Gönderdiği sunucudaki dil :** ${dil}
**Kullanıcının isteği :**
${istek}
      `)
      kanal.send(embed)
    } 
    if(dil == "EN") {
            message.channel.send(`Your request has been successfully reported to our system. It will be added soon.`)
      
      const embed = new Discord.MessageEmbed()
      .setTitle(`İstek bildirim sistemi`)
      .setDescription(`
**İsteği gönderen kişi :** ${message.author}
**Gönderdiği sunucu :** ${message.guild.name}
**Gönderdiği sunucudaki dil :** ${dil}
**Kullanıcının isteği :**
${istek}
      `)
      kanal.send(embed)
    }
  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["request"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'istek',
    description: '',
    usage: ''
  };