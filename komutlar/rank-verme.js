const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
if (message.author.id !== "351008627726876692" && message.author.id !== "786240484879237147") return message.channel.send(`Sahip olda gel koçum | For this command you must have Owner of the bot`)
  /*
Ranklar
sahip
vip
altın üye
*/
  if(message !== "sahip" || "vip" || "altın üye") {
    message.channel.send(`Sahipim Lütfen `)
  }
}