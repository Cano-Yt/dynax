const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")


exports.run = async(client, message) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let dil = db.fetch(`sunucudili_${message.guild.id}`)
  
  if(dil = "tr") {
const embed = new Discord.MessageEmbed()
.setTitle("Yardım menüsü")
    .setDescription(`
 \`Prefix : ${prefix}\`
 
  
  \`Kayıt Sistemi\`
> **kız "k" | erkek "e"**
`)
.setImage("https://media.discordapp.net/attachments/793827180513198100/810113577511419914/standard.gif")
.setColor("#FF9933")
message.channel.send(embed)
  }
  if(dil == "en") {
    
  }
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: '',
    usage: ''
  };