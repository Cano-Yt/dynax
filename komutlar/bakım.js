const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
      let dil = db.fetch(`sunucudili_${message.guild.id}`)
      if(dil == "TR"){
      if (message.author.id !== "351008627726876692" || message.author.id !== "786240484879237147") return message.channel.send(`Sahip olda gel koçum`)
      }
  if(dil == "EN"){
    if (message.author.id !== "351008627726876692" || message.author.id !== "786240484879237147") return message.channel.send(`For this command you must have Owner bot`)
  }
  
      
      }