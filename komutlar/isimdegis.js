const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
    let dil = db.fetch(`sunucudili_${message.guild.id}`)
    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix    
      let bakım = db.fetch(`bakım`) 
      if(bakım == "bakımda") {
            if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
    if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
  } else {
    let member = message.mentions.members.first()
    if(!member) { 
if(dil == "TR") {return message.channel.send(`Bir kullanıcı etiketlemelisin.`)}
if(dil == "EN") {return message.channel.send(`Please tag a member.`)}
}
    let isim;
      if(args[0]) {
   isim = args.slice(0).join(' '); 
} else {
  if(dil = "TR") {return message.channel.send(`Lütfen bir yazı veya sayı yazınız.`)}
  if(dil = "EN") {return message.channel.send(`Please write a text or a number.`)}
}
    member.setNickname(isim)
    if(dil == "TR") {return message.channel.send(`${member} Adlı kullanıcının ismi \`${isim}\` Olarak değiştirildi`)}
    if(dil == "EN") {return message.channel.send(`${member} Named user nickname changed to \`${isim}\``)}
  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["nickname","name"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'isim',
    description: '',
    usage: ''
  };