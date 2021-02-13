const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
const ayarlar = require('../ayarlar.json')
let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
let member = message.mentions.members.first();
let dil = db.fetch(`sunucudili_${message.guild.id}`)
require('request')({url: 'https://nekos.life/api/pat', json: true}, (req, res, json) => {
   if(dil == "TR") {
     if(!member) return message.channel.send(`Okşamak istediğin kullanıcıyı etiketlemelisin!`)
     if(message.author.id == member.user.id) return message.channel.send("kendini Okşayamassın maalesef..")
        let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username +" " + member.user.username+ ' Adlı kullanıcıyı okşuyor!')
        .setColor('#aaffff')
        .setImage(json.url);
        message.channel.send(embed);
   }
  if(dil == "EN") {
     if(!member) return message.channel.send(`You have to tag the user you want to pat!`)
     if(message.author.id == member.user.id) return message.channel.send("You can't pat yourself..")
        let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username +" " + member.user.username+ ' Patting named user!')
        .setColor('#aaffff')
        .setImage(json.url);
        message.channel.send(embed);
  }
    });
 

};

exports.conf = {
  enabled: true,
  aliases: ['pat'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'okşa',
  type: 'Eğlence',
  description: 'Bir kişiyi okşarsınız!',
  usage: 'okşa '
};