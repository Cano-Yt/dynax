const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")
const fs = require("fs")


exports.run = async(client, message) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let dil = await db.fetch(`sunucudili_${message.guild.id}`)
    let bakım = await db.fetch(`bakım`)
  if(bakım == "bakımda") {
    if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
    if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
  } else {
fs.readdir("./komutlar/", async(err, files) => {
  if (err) console.error(err);
  
  if(dil == "TR") {
const embed = new Discord.MessageEmbed()
.setTitle("Yardım menüsü")
    .setDescription(`
 \`Prefix : ${prefix}\`
 \`Dil : TR | Türkçe\`
 \`Toplam komut : ${files.leght}\`

  \`Moderasyon\`
<a:arrow:811578672426254427> **dil | prefix | otorol | sayaç | isim | nuke | ayarlar**

  \`Kullanıcı\`
<a:arrow:811578672426254427> **istek | afk | davet | sunucu-bilgi | istatistik**

  \`Eğlence\`
<a:arrow:811578672426254427> **öp | sarıl | okşa**
  
  \`Sahip\`
<a:arrow:811578672426254427> **bakım | reboot | cullop | pre-ver**
`)
.setImage(ayarlar.trbanner)
.setColor("#aaffff")
await message.channel.send(embed)
  }
  if(dil == "EN") {
    const embed = new Discord.MessageEmbed()
.setTitle("Commands")
    .setDescription(`
 \`Prefix : ${prefix}\`
 \`Language : EN | English\`
 \`Total commands : ${files.leght}\`
 
  \`Moderation\`
<a:arrow:811578672426254427> **Language | prefix | autorole | counter | nickname | nuke | settings**

  \`User\`
<a:arrow:811578672426254427> **request | afk | invite | server-info | statistic**

  \`Fun\`
<a:arrow:811578672426254427> **kiss | hug | tap**

  \`Owner\`
<a:arrow:811578672426254427> **bakım | reboot | cullop | pre-ver**
`)
.setImage(ayarlar.enbanner)
.setColor("#aaffff")
await message.channel.send(embed)
    }
})
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