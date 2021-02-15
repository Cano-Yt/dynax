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
  } else {

    let sayı = args[0] 
    let kanal = message.mentions.channels.first()
    let sayı2 = message.guild.memberCount
    if(dil == "TR") {
    if(args[0] == "sil") {
      await db.delete(`sayackanal_${message.guild.id}`)
      await db.delete(`sayacsayı_${message.guild.id}`)
       return message.channel.send(`Sayaç'ınızı sildim.`)
    }
    if(!sayı) return message.channel.send(`Lütfen bir sayı belirleyin.`)
    if(sayı < sayı2) return message.channel.send(`Belirlediğin sayı sunucunun toplamından büyük olması lazım.\n\`Sunucunun toplamı : ${sayı2}\``)
    if(!kanal) return message.channel.send(`Lütfen bir kanal belirtiniz.`)
    }
    if(dil == "EN") {
    if(args[0] == "delete") {
      await db.delete(`sayackanal_${message.guild.id}`)
      await db.delete(`sayacsayı_${message.guild.id}`)
       return message.channel.send(`Counter deleted.`)
    }
    if(!sayı) return message.channel.send(`Please enter number`)
    if(sayı > sayı2) return message.channel.send(`The number you have set must be greater than the total of the server.\n\`Sever total : ${sayı2}\``)    
    if(!kanal) return message.channel.send(`Please tag the channel.`)
    }
    db.set(`sayacsayı_${message.guild.id}`, sayı)
    db.set(`sayackanal_${message.guild.id}`, kanal.id)
    if(dil == "TR") {return message.channel.send(`Sayacınız ayarlanmıştır.`)}
    if(dil == "EN") {return message.channel.send(`Counter has set.`)}
  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["counter"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'sayaç',
    description: '',
    usage: ''
  };