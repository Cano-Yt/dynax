const Discord = require('discord.js');
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")
const ai = require('@codare/codare.ai');
const emo = require('../emojiler.json');
const talkedRecently = new Set();

exports.run = async(client, message, args) => {
    let dil = await db.fetch(`sunucudili_${message.guild.id}`)
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix    
    let bakım = db.fetch(`bakım`) 
if(bakım == "bakımda") {
 if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
 if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
} else {
  if (talkedRecently.has(message.author.id)) {
    if(dil == "TR") {return message.channel.send(new Discord.MessageEmbed().setAuthor("Uyarı!").setDescription(emo.uyari + " 5 Saniyede Bir Kullanılabilir!").setColor("YELLOW"));}
    if(dil == "EN") {return message.channel.send(new Discord.MessageEmbed().setAuthor("Warning!").setDescription(emo.uyari + " this command have 5 second Cooldown").setColor("YELLOW"));}
    } else {


        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
  
  let mesaj = args.slice(0).join(' ');
  if(dil == "TR"){if(!mesaj) return message.channel.send(new Discord.MessageEmbed().setAuthor("Uyarı!").setDescription(emo.uyari + "**Bir Şey Söyleyiniz...**").setColor("YELLOW"))}
  if(dil == "EN"){if(!mesaj) return message.channel.send(new Discord.MessageEmbed().setAuthor("Uyarı!").setDescription(emo.uyari + "**Bir Şey Söyleyiniz...**").setColor("YELLOW"))}
  
ai.sor(mesaj).then(res => {
message.channel.send(message.author, new Discord.MessageEmbed().setAuthor(" Yapay Zeka ").setDescription(emo.ai + " " + "Soru : " + mesaj + "\n" + emo.ai + " " + "Cevap : " + res).setColor("BLUE"))  
})
}
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['yapay-zeka','bot'],
 permLevel: 0
};

exports.help = {
 name: 'ai',
 description: '',
 usage: ''
}