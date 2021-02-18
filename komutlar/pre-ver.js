const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
  if (message.author.id !== "351008627726876692" && message.author.id !== "786240484879237147") return message.channel.send(`Sahip olda gel koçum | For this command you must have Owner of the bot`)
      let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
      let member = message.mentions.members.first() || client.members.cache.get(args[0])
      if(!member) return message.channel.send(`Bir üye etiketlemelisin veya id'sini yazmalısın`)
      let süre = args[1]
      
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'pre-ver',
    description: '',
    usage: ''
  };