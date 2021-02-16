const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
    let dil = await db.fetch(`sunucudili_${message.guild.id}`)
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix    
    let bakım = db.fetch(`bakım`) 
if(bakım == "bakımda") {
 if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
 if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
} else {
  //--------dataları fetchleyelim---------//
    let otorolaktif = await db.fetch(`otoRol_${message.guild.id}`)    // otorol rol'ü / aktif olup olmadığı
    let otokanal = await db.fetch(`otorolkanal_${message.guild.id}`)  //Otorol kanalı
    let sayackanal = await db.fetch(`sayackanal_${message.guild.id}`) //sayaç kanalı
    let sayacsayı =  await db.fetch(`sayacsayı_${message.guild.id}`)  //sayaç sayısı
    
    //Sunucuda fetchlediğimiz şeyleri bulalım//
    let otorolRolü = message.guild.roles.cache.find(c => c.id === otorolaktif)
    let otorolkanalı = message.guild.channels.cache.find(c => c.id === otokanal)
    let sayackanalı = message.guild.channels.cache.find(c => c.id === sayackanal)
    //Mükemmel bir embed tasarımı yapalım//
if(dil == "TR") {
const embed = new Discord.MessageEmbed()
.setTitle(`${message.guild.name} - Sunucu ayarları`)
.addField(`Prefix`, `\`${prefix}\``, true)
.addField(`Dil` , `\`TR | Türkçe\``, true)
.addField(`Otorol Rolü`, otorolRolü, true)
.addField(`Otorol kanalı`, otorolkanalı, true)
.addField(`Sayaç sayısı`, `\`${sayacsayı}\``, true)
.addField(`Sayaç kanalı`, sayackanalı, true)
await message.channel.send(embed)
}
if(dil == "EN") {
const embed = new Discord.MessageEmbed()
.setTitle(`${message.guild.name} - Server settings`)
.addField(`Prefix`, `\`${prefix}\``, true)
.addField(`Language` , `\`EN | English\``, true)
.addField(`Autorole role`, otorolRolü, true)
.addField(`Autorole channel`, otorolkanalı, true)
.addField(`counter number`, `\`${sayacsayı}\``, true)
.addField(`Counter channel`, sayackanalı, true)
await message.channel.send(embed)
}
  
  
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["settings"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ayarlar',
    description: '',
    usage: ''
  };