const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
    let dil = db.fetch(`sunucudili_${message.guild.id}`)
  
    if(dil == "TR") {
  if(!args[0]) return message.channel.send(`Lütfen bir dil kodu giriniz\nÖrn; TR , EN`)
      if(args[0] !== "TR" || "EN") return message.channel.send(`Lütfen Dil kodlarını düzgün giriniz. TR veya EN olucak şekilde.`)
  if(args[0] == "TR") return message.channel.send(`Zaten türkçe dilinde kullanıyorsunuz.`)
  if(args[0] == "EN") return db.set(`sunucudili_${message.guild.id}`, "EN").then(message.channel.send(`I have set the bot to English language. | Botu İngilizce diline ayarladım.`))
    }
  if(dil == "EN") {
    if(!args[0]) return message.channel.send(`Please enter a language code\nExample; TR , EN`)
         if(args[0] !== "TR" || "EN") return message.channel.send(`Please enter the language codes correctly. As TR or EN.`)
  if(args[0] == "TR") return db.set(`sunucudili_${message.guild.id}`, "TR").then(message.channel.send(`Botu Türkçe diline ayarladım. | I have set the bot to Turkish language.`))
  if(args[0] == "EN") return message.channel.send(`You are already using it in English.`)
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["dil"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'language',
    description: '',
    usage: ''
  };