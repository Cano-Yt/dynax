const Discord = require('discord.js')
const db = require("quick.db")


exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

    let member = message.mentions.members.first();
let dil = db.fetch(`sunucudili_${message.guild.id}`)
    require('request')({url: 'https://nekos.life/api/hug', json: true}, (req, res, json) => {
      if(dil == "TR") {
      if (member) {
        let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username +" " + member.user.username+ ' Adlı kullanıcıya sarılıyor!')
        .setColor('#363942')
        .setImage(json.url);
        message.channel.send(embed);
      } else message.channel.send('Sarılmak istediğin kullanıcıyı etiketlemelisin!');
      }
    });
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