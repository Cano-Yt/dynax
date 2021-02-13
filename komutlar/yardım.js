const Discord = require("discord.js");


exports.run = async(client, message) => {
const embed = new Discord.MessageEmbed()
.setTitle("Yardım menüsü")
    .setDescription(`
 \`Prefix : f!\`
 
  
  \`Kayıt Sistemi\`
> **kız "k" | erkek "e"**
`)
.setColor("#FF9933")
message.channel.send(embed)
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