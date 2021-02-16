const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
const ayarlar = require('../ayarlar.json')
let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
let member = message.mentions.members.first();
let dil = await db.fetch(`sunucudili_${message.guild.id}`)
  let bakım = await db.fetch(`bakım`)
  if(bakım == "bakımda") {
    if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
    if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
  } else {
require('request')({url: 'https://nekos.life/api/kiss', json: true}, (req, res, json) => {
       
  if(dil == "TR") {
        if(!member) return message.reply('Öpmek istediğin kullanıcıyı etiketlemelisin!');
        if(message.author.id == member.user.id) return message.channel.send("kendini öpmeyimi planlıyorsun ?! Hayır hayır bu olamaz")
        let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username +" " + member.user.username+ ' Adlı kullanıcıyı Öpüyor!')
        .setColor('#aaffff')
        .setImage(json.url);
        message.channel.send(embed);
  }
  if(dil == "EN") {
            if(!member) return message.reply('You have to tag the user you want to kiss!');
        if(message.author.id == member.user.id) return message.channel.send("You are planning on kissing yourself ?! No no this can't be")
        let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username +" " + member.user.username+ ' Kissing :kiss:!')
        .setColor('#aaffff')
        .setImage(json.url);
        message.channel.send(embed);
  }
});
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