const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
let dil = db.fetch(`sunucudili_${message.guild.id}`)
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if(dil == "TR") {
const embed = new Discord.MessageEmbed()
.setTitle(`Davet Komutu`)
.setDescription(`
**Sunucuna ekle** [Tıkla!](https://discord.com/oauth2/authorize?client_id=810111852842582045&scope=bot&permissions=805310526)
**Destek sunucusuna katıl** [Tıkla!](https://discord.gg/y6hyUKVTHD)
`)
.setImage("https://media.discordapp.net/attachments/793827180513198100/810128122586202132/standard_2.gif")
.setColor("#aaffff")
message.channel.send(embed)
  }
  if(dil == "EN") {
const embed = new Discord.MessageEmbed()
.setTitle(`İnvite command`)
.setDescription(`
**Add your server** [Click!](https://discord.com/oauth2/authorize?client_id=810111852842582045&scope=bot&permissions=805310526)
**Join support server** [Click!](https://discord.gg/y6hyUKVTHD)
`)
.setImage("https://media.discordapp.net/attachments/793827180513198100/810113577511419914/standard.gif")
.setColor("#aaffff")
message.channel.send(embed)
  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["invite","linkler","links"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'davet',
    description: '',
    usage: ''
  };