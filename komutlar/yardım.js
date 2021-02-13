const Discord = require("discord.js");


exports.run = async(client, msg) => {

    msg.channel.send(`
 \`Prefix : f!\`
 
  
  \`Kayıt Sistemi\`
> kız "k" | erkek "e"
    `);
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