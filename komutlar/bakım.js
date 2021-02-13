const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
if (message.author.id !== "351008627726876692" && message.author.id !== "786240484879237147") return message.channel.send(`Sahip olda gel koçum | For this command you must have Owner of the bot`)
message.channel.send(`Bakım al/çıkar`)

  let bakım = db.fetch(`bakım`)
  if(bakım !== "bakımda") {
  if(args[0] == "al") {
  db.set(`bakım`, "bakımda")
    message.channel.send(`Botu bakıma aldım.`)
  }
    if(bakım == "bakımda") {
      if(args[0] == "çıkar"){
        db.delete(`bakım`, "bakımda")
        message.channel.send(`Botu bakımdan çıkardım artık kullanılabilir.`)
      }
    }
}
      }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'bakım',
    description: '',
    usage: ''
  };