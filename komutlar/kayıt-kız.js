const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {

let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
  let kayıtsız = db.fetch(`kayıtsız_${message.guild.id}`)
  let kızID = db.fetch(`kız_${message.guild.id}`)
  let yetkili = db.fetch(`kayıtyetkili_${message.guild.id}`)
  let 
  let isimyaş = db.fetch(`kayıtisimyas_${message.guild.id}`)
  let dil = db.fetch(`sunucudili_${message.guild.id}`)
  
    let member = message.mentions.members.first() || args[0]
if(dil = "tr") {
   if(message.channel !== kanal) return message.channel.send(`Bu komutu ${kanal} kanalında yapmalısın`)  
  if(!message.member.roles.cache.has("806484808817442836")) return message.channel.send(`<@$806484808817442836> Rolüne sahip olman gerekiyor.`)
    if(!member) return message.channel.send(`Bir kullanıcı etiketleyerek yapmalsın.`)
  if(!member.roles.cache.has("806480832612270102")) return message.channel.send(`Etiketlediğin kullanıcıda ${message.guild.roles.cache.find(c => c.id === "806480832612270102").name} Rolü olması lazım.`)

if(!args[1]) return message.channel.send(`İsim girmelisin`)
if(!args[2]) return message.channel.send(`Yaş girmelisin`)

  member.roles.add(kayıtsız);
member.roles.remove(kızID);
  db.add(`saykız_${message.author.id}.${message.guild.id}`, 1);
  member.setNickname(`℘ ${args[1]} | ${args[2]}`)
  
  const embed = new Discord.MessageEmbed()
  
  .setTitle(`Kayıt başarılı`)
  .setDescription(`
${member} Kullanıcısına ${message.guild.roles.cache.find(c => c.id === "806458729658056746")} Rolü verildi.

**℘ ${args[1]} | ${args[2]}** İsmi ile kaydedildi

${message.author} **Kayıt sayın:** \`f!kayıtsayı Yazarak görebilirsin.\`
`)
 let kayıtsayı = db.fetch(`saykız_${message.author.id}.${message.guild.id}`)
  const log = new Discord.MessageEmbed()
  .setColor("#")
  .setTitle("Kayıt Oldu")
  .setDescription(`
  **Bir kullanıcı sunucuya kayıt oldu**
  ${member} İsmi ile kaydedildi.
  ${message.guild.roles.cache.find(c => c.id === "806458729658056746")} Rolü verildi.
  Kayıt eden yetkili ${message.author}
  Toplamda ${kayıtsayı} Kız kayıt'ı oldu
  `)
  kanal.send(embed)
  message.guild.channels.cache.find(c => c.id === "809400719778119741").send(log)
   }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["k"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kız',
    description: '',
    usage: ''
  };