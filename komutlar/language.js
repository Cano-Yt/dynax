const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
    let dil = db.fetch(`sunucudili_${message.guild.id}`)
  
    if(dil == "TR") {
  if(!args[0]) return message.channel.send(`Lütfen bir dil kodu giriniz\nÖrn; TR , EN , DE , FR`)
  if(args[0] == "TR") return message.channel.send(`Zaten türkçe dilinde kullanıyorsunuz.`)
  if(args[0] == "EN") return message.channel.send(`I have set the bot to English language. | Botu İngilizce diline ayarladım.`)
  if(args[0] == "DE") return message.channel.send(`Ich habe das Boot auf deutsche Sprache eingestellt. | Botu Almanca diline ayarladım.`)
  if(args[0] == "FR") return message.channel.send(`J'ai mis le bot en langue française. | Botu Fransızca diline ayarladım.`)
    }
  if(dil == "EN") {
    if(!args[0]) return message.channel.send(`Please enter a language code\nExample; TR , EN , DE , FR`)
  if(args[0] == "TR") return message.channel.send(`Botu Türkçe diline ayarladım. | I have set the bot to Turkish language.`)
  if(args[0] == "EN") return message.channel.send(`You are already using it in English.`)
  if(args[0] == "DE") return message.channel.send(`Ich habe das Boot auf deutsche Sprache eingestellt. | I have set the bot to German language.`)
  if(args[0] == "FR") return message.channel.send(`J'ai mis le bot en langue française. | I have set the boat to French language.`)
  }
  if(dil == "DE") {
  if(!args[0]) return message.channel.send(`Bitte geben Sie einen Sprachcode ein\nStichprobe; TR , EN , DE , FR`)
      if(args[0] == "TR") return message.channel.send(`Zaten türkçe dilinde kullanıyorsunuz.`)
  if(args[0] == "EN") return message.channel.send(`I have set the bot to English language. | Botu İngilizce diline ayarladım.`)
  if(args[0] == "DE") return message.channel.send(`Ich habe das Boot auf deutsche Sprache eingestellt. | Botu Almanca diline ayarladım.`)
  if(args[0] == "FR") return message.channel.send(`J'ai mis le bot en langue française. | Botu Fransızca diline ayarladım.`)
  }
  if(dil == "FR") {
    if(!args[0]) return message.channel.send(`Veuillez saisir un code de langue\nÉchantillon; TR , EN , DE , FR`)
    
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