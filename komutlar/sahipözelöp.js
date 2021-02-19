const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
if (message.author.id !== "351008627726876692" && message.author.id !== "786240484879237147") return message.channel.send(`Sahip olda gel koçum | For this command you must have Owner of the bot`)
  let sude = "786240484879237147"
  let can = "351008627726876692"
  const nokta = ["https://images-ext-1.discordapp.net/external/TCSDoOtDoDeQmWbcV7rXmB6dvdExOqfNWmqNLqso6Bw/https/cdn.nekos.life/kiss/kiss_085.gif?width=360&height=202","https://images-ext-2.discordapp.net/external/MiPp7ORuxlBfZsW2XJi_D4v7XZ7LGg6vLYyg3MNTbHM/https/media.discordapp.net/attachments/810402124152176661/811573839636463637/image0-4.gif?width=190&height=180","https://images-ext-2.discordapp.net/external/Jt7EbCuiwAEFp9fYdr7AGvyg657Lwy6JXrTkYw1Tx6s/https/media.discordapp.net/attachments/810402124152176661/811573843697074196/Thetis_Couple_Gif_6.gif?width=115&height=115","https://images-ext-1.discordapp.net/external/SsnqUfZs0iQf50_TEKI-X4tY5AUkBNOQSgL1Pqi3Jq0/https/media.discordapp.net/attachments/810402124152176661/811573840957800448/7.gif?width=243&height=243","https://images-ext-2.discordapp.net/external/a99aiAZwK-k2He5d5-kltewtDnyzLrd-mqupw-Pd1Pg/https/media.discordapp.net/attachments/810402124152176661/811573840585031720/2.gif?width=103&height=103","https://images-ext-1.discordapp.net/external/tJ1ng58x2WkE18u0xJkzbVo07cjraXhfY8eP0EcwPFE/https/media.discordapp.net/attachments/810402124152176661/811573840148561930/3.gif?width=88&height=111"]
  const response = nokta[Math.floor(Math.random() * nokta.length)];
 let member = message.mentions.members.first()
 if(!member) return message.channel.send(`Bir kullanıcı etiketlemelisin.`)
 if(message.author.id == sude) {
   if(member.id !== can) return message.channel.send(`Sadece Can'ı öpebilirsin!`)
   const embed = new Discord.MessageEmbed()
   .setTitle(`<@${sude}> İle <@${can}> Öpüşüyor..`)
   .setColor('#aaffff')
   .setImage(response);
   message.channel.send(embed);
 }
  if(message.author.id == can) {
    if(member.id !== sude) return message.channel.send(`Sadece Sude'yi öpebilirsin!`)
   const embed = new Discord.MessageEmbed()
   .setTitle(`<@${sude}> İle <@${can}> Öpüşüyor..`)
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