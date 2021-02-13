const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
    let kanal = message.guild.channels.cache.find(c => c.id === "806480558044872775")
    let member = message.mentions.members.first() || args[0]

   if(message.channel !== kanal) return message.channel.send(`Bu komutu ${kanal} kanalında yapmalısın`)  
  if(!message.member.roles.cache.has("806484808817442836")) return message.channel.send(`<@$806484808817442836> Rolüne sahip olman gerekiyor.`)
    if(!member) return message.channel.send(`Bir kullanıcı etiketleyerek yapmalsın.`)
  if(!member.roles.cache.has("806480832612270102")) return message.channel.send(`Etiketlediğin kullanıcıda ${message.guild.roles.cache.find(c => c.id === "806480832612270102").name} Rolü olması lazım.`)
    let isim;
if(args[1]) return message.channel.send(`İsim girmelisin`)
if(args[2]) return message.channel.send(`Yaş girmelisin`)

  member.roles.add("806458729658056746");
member.roles.remove("806480832612270102");
  db.add(`saykız_${message.author.id}.${message.guild.id}`, 1);
  member.setNickname(`℘ args[1] | args[2]`)
  
  const embed = new Discord.MessageEmbed()
  .setTumbnail(member.user.avatarURL({dynamic: true}))
  .setTitle(`Kayıt başarılı`)
  .setDescription(`
${member} Kullanıcısına ${message.guild.roles.cache.find(c => c.id === "806458729658056746")} Rolü verildi.
℘${ args[1] | args[2]} İsmi ile kaydedildi

${message.author} **Kayıt sayın:** \`f!kayıtsayı Yazarak görebilirsin.\`
`)
 let kayıtsayı = db.fetch(`saykız_${message.author.id}.${message.guild.id}`)
  const log = new Discord.MessageEmbed()
  .setColor("#")
  .setTitle("Kayıt Oldu")
  .setDescription(`
  **Bir kullanıcı sunucuya kayıt oldu**
  ${member} ℘${ args[1] | args[2]} İsmi ile kaydedildi.
  ${message.guild.roles.cache.find(c => c.id === "806458729658056746")} Rolü verildi.
  Kayıt eden yetkili ${message.author}
  Toplamda ${kayıtsayı} Kız kayıt'ı oldu
  `)
  kanal.send(embed)
  message.guild.channels.cache.find(c => c.id === "809400719778119741").send(log)
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