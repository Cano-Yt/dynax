const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
    let dil = db.fetch(`sunucudili_${message.guild.id}`)
  
    if(dil == "TR") {
  if(!args[0]) return message.channel.send(`Lütfen bir dil kodu giriniz\nÖrn; TR , EN , DE , FR`)
    }
  if(dil == "EN") {
    if(!args[0]) return message.channel.send(`Please enter a language code\nExample; TR , EN , DE , FR`)
  }
  if(dil == "DE") {
  if(!args[0]) return message.channel.send(`Bitte geben Sie einen Sprachcode ein\nStichprobe; TR , EN , DE , FR`)
  }
  if(dil == "FR") {
    if(!args[0]) return message.channel.send(`Veuillez saisir un code de langue\n`)
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