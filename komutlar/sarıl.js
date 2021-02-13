const Discord = require('discord.js');


exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

    
  try {
    let member = message.mentions.members.first();

    require('request')({url: 'https://nekos.life/api/hug', json: true}, (req, res, json) => {
      if (member) {
        let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username +" " + member.user.username+ ' Adlı kullanıcıya sarılıyor!')
        .setColor('#363942')
        .setImage(json.url);

        message.channel.send(embed);
      } else message.reply('Sarılmak istediğin kullanıcıyı etiketlemelisin!');
    });
  } catch (err) {
    message.channel.send('Hata!\n' + err).catch();
  }

};

exports.conf = {
  enabled: true,
  aliases: ['hug'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'sarıl',
  type: 'Eğlence',
  description: 'Bir kişiyi okşarsınız!',
  usage: 'okşa '
};