const Discord = require("discord.js");


exports.run = async(client, msg) => {

    msg.channel.send(`deneme`);
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
    usage: 'komutlar'
  };