const Discord = require('discord.js');


exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
const ayarlar = require('../ayarlar.json')
let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  
    let member = message.mentions.members.first();

    require('request')({url: 'https://nekos.life/api/kiss', json: true}, (req, res, json) => {
      if (member) {
        if(!member) return message.reply('Öpmek istediğin kullanıcıyı etiketlemelisin!');
        if(member == message.author) return message.channel.send(Ke)
        let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username +" " + member.user.username+ ' Adlı kullanıcıyı Öpüyor!')
        .setColor('#363942')
        .setImage(json.url);
        message.channel.send(embed);
      }
    });

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