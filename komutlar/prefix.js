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
      message.guild.owner.send(`${message.guild.name} Sunucunuzdaki prefix'iniz ${message.author} tarafından ${prefix1} olarak ayarlanmıştır.`)
    }
  if(dil == "EN") {
          if(args[0] == "delete") {
        db.delete(`prefix_${message.guild.id}`)
        message.channel.send(`I deleted my prefix on the server\nNew prefix : ${ayarlar.prefix}`)
        message.guild.owner.send(`The prefix on ${message.guild.name} has been deleted by ${message.author}!\nNew prefix : ${ayarlar.prefix}`)
      }
      if(prefix1 !== "sil") return;
      if(!prefix1) return message.channel.send(`You must enter a prefix to set it.`)
      db.set(`prefix_${message.guild.id}`)
      message.channel.send(`Your prefix on the server is set to $ {prefix1}.`)
      message.guild.owner.send(`Your prefix on ${message.guild.name} set to $ {prefix1} by ${message.author}.`)
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