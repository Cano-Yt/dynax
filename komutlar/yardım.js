const Discord = require("discord.js");


exports.run = async(client, msg) => {

    msg.channel.send(`deneme`);
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komutlar', 'help', 'yardim', 'yardım', 'kullanımlar', 'komutyardım', 'hp', 'ytr', 'sd', 'kd'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'komutlar',
    description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
    usage: 'komutlar'
  };