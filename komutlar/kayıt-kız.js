const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
    let kanal = message.guild.channels.cache.find("806480558044872775")
    let member = message.mentions.members.first() || args[0]

   if(message.channel !== kanal) return message.channel.send(`Bu komutu ${kanal} kanalında yapmalısın`)  
  if(!message.member.roles.cache.has("806484808817442836")) return message.channel.send(`<@$806484808817442836> Rolüne sahip olman gerekiyor.`)
    if(!member) return message.channel.send(`Bir kullanıcı etiketleyerek yapmalsın.`)
    let isim;
if(args[1]) {
isim = args.slice(1).join(' ');
} else { message.channel.send(`İsim ve yaş girmelisin`) }
  member.roles.add("806458729658056746");
member.roles.remove("806480832612270102");
  
}

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