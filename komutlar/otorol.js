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
    let kanal = message.mentions.channels.first()
    let rol = message.mentions.channels.first()
    if(dil == "TR") {
      if(!rol) return message.channel.send(`Otomatik olarak verilecek rolü belirtmelisin`)
      if(!kanal) {
        db.set(`otoRol_${message.guild.id}`, rol.id)
        message.channel.send(`Bir kanal etiketlemediğiniz için Sadece otomatik rol vericektir. mesaj atmıyacaktır.`)
      }
    }
  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["auto-role","autorole"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'otorol',
    description: '',
    usage: ''
  };