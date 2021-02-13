const Discord = require('discord.js')
const db = require("quick.db")
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
let member = message.mentions.members.first();
let dil = db.fetch(`sunucudili_${message.guild.id}`)
  let bakım = db.fetch(`bakım`)
  if(bakım == "bakımda") {
    if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
    if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
  } else {
require('request')({url: 'https://nekos.life/api/hug', json: true}, (req, res, json) => {

  if(dil == "TR") {
        if(!member) return message.channel.send('Sarılmak istediğin kullanıcıyı etiketlemelisin!');
        if(member == message.author) return message.channel.send(`Kendine sarılamazsın :cry:\nAma ben sarılabilirim sana :hugging:`)
        let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username +" " + member.user.username+ ' Adlı kullanıcıya sarılıyor!')
        .setColor('#aaffff')
        .setImage(json.url);
        message.channel.send(embed);
      }
      if(dil == "EN") {
        if(!member) return message.channel.send('You must tag the user you want to hug!');
        if(member == message.author) return message.channel.send(`You can't hug yourself :cry:\nBut I can hug you :hugging:`)
        let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username +" " + member.user.username+ ' Hugs soo cute!')
        .setColor('#aaffff')
        .setImage(json.url);
        message.channel.send(embed);
      }
    });
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