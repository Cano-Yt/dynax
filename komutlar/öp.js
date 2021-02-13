const Discord = require('discord.js');


exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

    
  try {
    let member = message.mentions.members.first();

    require('request')({url: 'https://nekos.life/api/kiss', json: true}, (req, res, json) => {
      if (member) {
        let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username +" " + member.user.username+ ' Adlı kullanıcıyı Öpüyor!')
        .setColor('#363942')
        .setImage(json.url);

        message.channel.send(embed);
      } else message.reply('Öpmek istediğin kullanıcıyı etiketlemelisin!');
    });
  } catch (err) {
    message.channel.send('Hata!\n' + err).catch();
  }

};

exports.conf = {
  enabled: true,
  aliases: ['kiss'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'öp',
  type: 'Eğlence',
  description: 'Bir kişiyi okşarsınız!',
  usage: 'okşa '
};