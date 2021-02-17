const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
  const nokta = ["","","",""];
  const response = nokta[Math.floor(Math.random() * nokta.length)];
  message.reply(response);
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'deneme',
    description: '',
    usage: ''
  };