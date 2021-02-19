const Discord = require("discord.js");
const db = require("quick.db")
const moment = require("moment")
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if(!message.guild) return;
  let dil = await db.fetch(`sunucudili_${message.guild.id}`)
  let afk = db.fetch(`afkoldu_${message.author.id}_${message.guild.id}`)
  if(afk == "evet") return;
  let prefix = ayarlar.prefix
  let sebeb = args.slice(0).join(' ');
  
 let atılma;
  if(dil == "TR") {
  moment.locale('tr') 
  let atılmaay = moment(Date.now()+10800000).format("MM")
  let atılmagün = moment(Date.now()+10800000).format("DD")
  let atılmasaat = moment(Date.now()+10800000).format("HH:mm:ss")
 atılma = `\`${atılmagün} ${atılmaay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${atılmasaat}\``
  }
  let atılmaen;
  if(dil == "EN") {
    moment.locale("en")
  let atılmaay = moment(Date.now()+10800000).format("MM")
  let atılmagün = moment(Date.now()+10800000).format("DD")
  let atılmasaat = moment(Date.now()+10800000).format("HH:mm:ss")
   atılmaen = `\`${atılmagün} ${atılmaay.replace(/01/, 'January').replace(/02/, 'February').replace(/03/, 'March').replace(/04/, 'April').replace(/05/, 'May').replace(/06/, 'June').replace(/07/, 'July').replace(/08/, 'August').replace(/09/, 'September').replace(/10/, 'October').replace(/11/, 'November').replace(/12/, 'December')} ${atılmasaat}\``
  } 
  

    if(dil == "TR") {
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
  }
 if(dil == "EN") {
    if(!sebeb) {
  await db.set(`afksebeb_${message.author.id}_${message.guild.id}`, "Not specified.")
  await db.set(`afkoldu_${message.author.id}_${message.guild.id}`, "evet")
  await db.set(`giriş_${message.author.id}_${message.guild.id}`, atılmaen)
    const embed = new Discord.MessageEmbed()
    .setTitle(`AFK system`)
    .setDescription(`
    **${message.author.tag} is afk**
    **Reason: ** \`Not specified.\`
    **Entry time: **${atılmaen}
    `)
    .setThumbnail("https://cdn.discordapp.com/attachments/783001757596254238/811956462666514442/811586592102940704.png")
    message.channel.send(embed)
  } else {
    await db.set(`afksebeb_${message.author.id}_${message.guild.id}`, sebeb)
    await db.set(`afkoldu_${message.author.id}_${message.guild.id}`, "evet")
    await db.set(`giriş_${message.author.id}_${message.guild.id}`, atılmaen)
    const embed = new Discord.MessageEmbed()
    .setTitle(`AFK system`)
    .setDescription(`
    **${message.author.tag} is afk**
    **Reason : **\`${sebeb}\`
    **Entry time: **${atılmaen}
    `)
    .setThumbnail("https://cdn.discordapp.com/attachments/783001757596254238/811956462666514442/811586592102940704.png")
    message.channel.send(embed)
  }
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
