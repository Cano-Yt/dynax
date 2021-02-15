const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
if (message.author.id !== "351008627726876692" && message.author.id !== "786240484879237147") return message.channel.send(`Sahip olda gel koçum | For this command you must have Owner of the bot`)
let member = message.mentions.members.first() || client.users.cache.get(args[0])
  /*
Ranklar
sahip
vip
altın üye
*/
if(!member) return message.channel.send(`Bir üye etiketlemelisin veya id yazmalısın`)
  let msg;
  if(args[1]) {
   const msg = args.slice(1).join(' '); 
}
if (msg !== "sahip" || msg !== "vip" || msg !== "altın üye") {
    message.channel.send(`Lütfen etiketlediğin üyeye düzgün bir yetki ver \nvip veya altın üye yazmalısın.`)
  } else {
    db.set(`rank_${member.id}`, msg)
    message.channel.send(`${member} adlı üyeye ${msg} rank'ını verdim.`)
  }
}
exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'rank-ver',
  type: 'Eğlence',
  description: 'Bir kişiyi okşarsınız!',
  usage: 'okşa '
};