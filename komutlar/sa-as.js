const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

let dil = await db.fetch(`sunucudili_${message.guild.id}`)
  let bakım = await db.fetch(`bakım`)
  if(bakım == "bakımda") {
    if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
    if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
  } else {
if(dil == "EN") {  if(!message.author.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`You must have \`Manage nicknames\` Permission to use this command.`)}
if(dil == "TR") {  if(!message.author.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`Bu komutu kullanabilmek için \`Takma adları yönet\` Yetkisine sahip olmalısın.`)}

    let selam = db.fetch(`sa-as_${message.guild.id}`)
    if(dil == "TR") {
      if(args[0] !== "kapat" && args[0] !== "aç") return message.channel.send(`Selam verene cevap verme sistemini açmak için ${prefix}sa-as aç\nKapamak için ise ${prefix}sa-as kapat`)
    if(args[0] == "kapat") {
      if(selam !== "acik") return message.channel.send(`selam verene cevap verme sistemi zaten kapalı.`)
      await db.delete(`sa-as_${message.guild.id}`)
      return message.channel.send(`Selam verene cevap verme sistemi kapandı.`)
     }  
      if(args[0] == "aç") { 
        if(selam == "acik") return message.channel.send(`Selam verene cevap verme sistemi zaten açık.`)
        await db.set(`sa-as_${message.guild.id}`, "acik")
        return message.channel.send(`Selam verene cevap verme sistemi açıldı.`)
      }
    }
    if(dil == "EN") {
            if(args[0] !== "close" && args[0] !== "open") return message.channel.send(`To open the system of answering the hello ${prefix}hello open\nKapamak için ise ${prefix}hello close`)
    if(args[0] == "close") {
      if(selam !== "acik") return message.channel.send(`selam verene cevap verme sistemi zaten kapalı.`)
      await db.delete(`sa-as_${message.guild.id}`)
      return message.channel.send(`Selam verene cevap verme sistemi kapandı.`)
     }  
      if(args[0] == "open") { 
        if(selam == "acik") return message.channel.send(`Selam verene cevap verme sistemi zaten açık.`)
        await db.set(`sa-as_${message.guild.id}`, "acik")
        return message.channel.send(`Selam verene cevap verme sistemi açıldı.`)
    }
  }
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["hello"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'sa-as',
    description: '',
    usage: ''
  };