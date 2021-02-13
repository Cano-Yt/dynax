const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
    let dil = db.fetch(`sunucudili_${message.guild.id}`)
    let prefix1 = args[0] || args[1]
    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
    if(dil == "TR") {
      if(args[0] == "sil") {
        db.delete(`prefix_${message.guild.id}`)
        message.channel.send(`Sunucudaki prefix'imi sildim\nYeni prefix'iniz : ${ayarlar.prefix}`)
        message.guild.owner.send(`${message.guild.name} Sunucunuzdaki prefix ${message.author} tarafından silinmiştir!\nYeni prefix'iniz : ${ayarlar.prefix}`)
      }
      if(prefix1 !== "sil") return;
      if(!prefix1) return message.channel.send(`Ayarlamak için bir prefix girmelisiniz.`)
      db.set(`prefix_${message.guild.id}`)
      message.channel.send(`Sunucudaki prefix'iniz ${prefix1} Olarak ayarlanmıştır.`)
      message.guild.owner.send(`${message.guild.name} Sunucunuzdaki prefix'iniz `)
    }
    }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'prefix',
    description: '',
    usage: ''
  };