const Discord = require("discord.js");


exports.run = async(client, message, args) => {
    let kanal = message.guild.channels.cache.find("806480558044872775")
    let member = message.mentions.members.first()
    
    if(!member) return message.channel.send(`Bir kullanıcı etiketleyerek yapmalsın.`)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["k"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kız',
    description: '',
    usage: ''
  };