const Discord = require("discord.js");
const db = require("quick.db")
const moment = require("moment")
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let prefix = ayarlar.prefix
  let sebeb = args.slice(0).join(' ');
  let atılmaay = moment(Date.now()+10800000).format("MM")
  let atılmagün = moment(Date.now()+10800000).format("DD")
  let atılmasaat = moment(Date.now()+10800000).format("HH:mm:ss")
  let atılma = `\`${atılmagün} ${atılmaay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${atılmasaat}\``
  
  
  moment.locale('tr');
  
  if(!sebeb) {
  await db.set(`afksebeb_${message.author.id}_${message.guild.id}`, "Belirtilmemiş.")
  await db.set(`afkoldu_${message.author.id}_${message.guild.id}`, "evet")
  await db.set(`giriş_${message.author.id}_${message.guild.id}`, atılma)
    const embed = new Discord.MessageEmbed()
    .setTitle(`AFK sistemi`)
    .setDescription(`
    **${message.author.tag} Afk oldu**
    **Sebebi : **\`Belirtilmemiş.\`
    **Giriş zamanı: **${atılma}
    `)
    .setThumbnail("https://cdn.discordapp.com/attachments/783001757596254238/811956462666514442/811586592102940704.png")
    message.channel.send(embed)
  } else {
    await db.set(`afksebeb_${message.author.id}_${message.guild.id}`, sebeb)
    await db.set(`afkoldu_${message.author.id}_${message.guild.id}`, "evet")
    await db.set(`giriş_${message.author.id}_${message.guild.id}`, atılma)
    const embed = new Discord.MessageEmbed()
    .setTitle(`AFK sistemi`)
    .setDescription(`
    **${message.author.tag} Afk oldu**
    **Sebebi : **\`${sebeb}\`
    **Giriş zamanı: **${atılma}
    `)
    .setThumbnail("https://cdn.discordapp.com/attachments/783001757596254238/811956462666514442/811586592102940704.png")
    message.channel.send(embed)
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "afk", 
  description: "Örnek açıklama.",
  usage: ".örnek <kullanım>" 
};
