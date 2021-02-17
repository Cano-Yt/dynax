const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
if (message.author.id !== "351008627726876692" && message.author.id !== "786240484879237147") return message.channel.send(`Sahip olda gel koçum | For this command you must have Owner of the bot`)
  let sude = "786240484879237147"
  let can = "351008627726876692"
  const nokta = ["",""]
  const response = nokta[Math.floor(Math.random() * nokta.length)];
 let member = message.mentions.members.first()
 if(message.author.id == sude) {
   if(member.id !== can) return message.channel.send(`Sadece Can'ı öpebilirsin!`)
   const embed = Discord.MessageEmbed()
   .setTitle(`<@${sude}> İle <@${can}> Öpüşüyor..`)
   .setColor('#aaffff')
   .setImage(response);
   message.channel.send(embed);
 }
  if(message.author.id == can) {
    if(member.id !== sude) return message.channel.send(`Sadece Sude'yi öpebilirsin!`)
   const embed = Discord.MessageEmbed()
   .setTitle(`<@${can}> İle <@${sude}> Öpüşüyor..`)
   .setColor('#aaffff')
   .setImage(response);
   message.channel.send(embed);
  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'cullop',
    description: '',
    usage: ''
  };