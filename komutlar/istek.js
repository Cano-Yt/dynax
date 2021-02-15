const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
    let dil = db.fetch(`sunucudili_${message.guild.id}`)
    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix    
    let rank = db.fetch(`rank_${message.author.id}`) || "Yok"
    let kanal = message.guild.channels.cache.find(c => c.id === "810750526106763324")
      let bakım = db.fetch(`bakım`) 
      if(bakım == "bakımda") {
            if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
    if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
  } else {
      if(args[0]) {
   let istek = args.slice(0).join(' '); 
} else {
  if(dil = "TR") {return message.channel.send(`Lütfen isteğinizi yazınız.`)}
  if(dil = "EN") {return message.channel.send(`Please write your request.`)}
}
    if(dil = "TR") {
      message.channel.send(`İsteğiniz başarıyla sistemimize bildirilmiştir. En yakın zamanda eklenecektir.`)
      
      const embed = new Discord.MessageEmbed()
      .setTitle(`İstek bildirim sistemi`)
      .setDescription(`
İsteği gönderen kişi ${message.author}
Gönderenin Mevkisi ${rank}
Gönderdiği sunucu ${message.guild.name}
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