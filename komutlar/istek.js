const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
    let dil = db.fetch(`sunucudili_${message.guild.id}`)
    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix    
    if(args[1]) {
isim = args.slice(1).join(' ');
} else {
isim = member.user.username;
}
    let istek = args.slice(1).join(' '); 
} else {
  if(dil = "TR") {
    return message.channel.send(`Lütfen isteğinizi yazınız.`)
  }
  if(dil = "EN") {
    return message.channel.send(`Please write your request.`)
  }
}

      let bakım = db.fetch(`bakım`) 
      if(bakım == "bakımda") {
            if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
    if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
  } else {
    
  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["request"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'istek',
    description: '',
    usage: ''
  };