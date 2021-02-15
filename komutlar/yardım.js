const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")


exports.run = async(client, message) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let dil = db.fetch(`sunucudili_${message.guild.id}`)
    let bakım = db.fetch(`bakım`)
  if(bakım == "bakımda") {
    if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
    if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
  } else {
  if(dil == "TR") {
const embed = new Discord.MessageEmbed()
.setTitle("Yardım menüsü")
    .setDescription(`
 \`Prefix : ${prefix}\`
 \`Dil : TR | Türkçe\`
 
  \`Moderasyon\`
> **dil | prefix**

  \`Kullanıcı\`
> **istek**

  \`Eğlence\`
> **öp | sarıl | okşa**
`)
.setImage("https://media.discordapp.net/attachments/793827180513198100/810128122586202132/standard_2.gif")
.setColor("#aaffff")
message.channel.send(embed)
  }
  if(dil == "EN") {
    const embed = new Discord.MessageEmbed()
.setTitle("Commands")
    .setDescription(`
 \`Prefix : ${prefix}\`
 \`Language : EN | English\`
 
  \`Moderation\`
> **Language | prefix**

  \`User\`
> **request**

  \`Fun\`
> **kiss | hug | tap**
`)
.setImage("https://media.discordapp.net/attachments/793827180513198100/810113577511419914/standard.gif")
.setColor("#aaffff")
message.channel.send(embed)
    }
  }
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["help","h","commands","komutlar","y"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: '',
    usage: ''
  };