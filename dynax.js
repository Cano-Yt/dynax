
const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db")
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');

process.on('uncaughtException', function(err) { 
    console.log(err) 
}) 

//Bilgiler
/*
"Prefix ayarlamak için client.on veya exports.run Altına " let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix; "" Koyun"

Bir rol'ü sunucuda bulmak için Komut'a "${message.guild.roles.cache.find(c => c.id === "Rol İD")}" Koyun
Bir kanal'ı sunucuda bulmak için Komut'a "message.guild.channels.cache.find(c => c.id === "Kanal İD")" Koyun

*/
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

///////////// KOMUTLAR BAŞ

/*
client.on("ready", () => {
const embed = new Discord.MessageEmbed()
.setTitle(`Bot uptime edildi`)
.setDescription(`
:rocket: ${client.guilds.cache.size} Sunucuya
:zzz: ${client.guilds.cache.reduce((a,b)=> a + b.memberCount, 0).toLocaleString()} kullanıcıya
**hizmet veriyor**
`)
client.channels.cache.get('810145611939840000').send(embed);
})
*/

/*
client.on("guildMemberAdd", async member => {
  var prefix = db.fetch(`prefix_${message.guild.id} || ayarlar.prefix;
  
  let kanal = member.guild.channels.cache.find(c => c.id === "806480558044872775")

  const embed = new Discord.MessageEmbed()
  .setColor("#FF9933")
  .setTitle("**Welcome to ${member.guild.name}**")
  .setDescription(`
  Sunucumuza hoş geldin ${member}
  Kaydının yapılması için **Adını ve Yaşını** yazman yeterli olucaktır.
  <@&806484808817442836> Rolündeki yetkililer seninle ilgilenecektir.
  
  Seninle beraber
  **${kanal.guild.memberCount} Kişiyiz
  **500** Kişi olmaya **${kanal.guild.memberCount - 500}** Kişi kaldı
  `)
  kanal.send(`<@&806484808817442836> ${member}`)
  kanal.send(embed)
  member.roles.add("806480832612270102")
  member.setNickname(`℘ İsim | Yaş`)
})
*/
client.on("guildMemberAdd", async member => {
let kanal = db.fetch(`otorolkanal_${member.guild.id}`)
let rol = db.fetch(`otoRol_${member.guild.id}`)
let dil = db.fetch(`dil_${member.guild.id}`)
let rol2 = member.guild.roles.cache.find(c => c.id === `${rol}`)
if(!rol) return;
if(rol) {
member.roles.add(rol)
}
if(kanal) {
let kanal2 = member.guild.channels.cache.find(c => c.id === `${kanal}`)
if(dil == "TR") {
const embed = new Discord.MessageEmbed()
.setTitle(`${client.user.username} - Otorol sitemi`)
.setDescription(`
Sunucuya ${member} Adlı üye katıldı. Hoş geldin.
${rol2} Adlı rol üyeye verildi.
Senin gelmenle ${member.guild.memberCount} Kişi olduk!`)
kanal2.send(embed)
}
if(dil == "EN") {
const embed1 = new Discord.MessageEmbed()
.setTitle(`${client.user.username} - Otorol sitemi`)
.setDescription(`
${member} Named member joined the server. Welcome.
${rol2} Named role was give a role.
With your join we have total ${member.guild.memberCount} Person!`)
kanal2.send(embed1)
}
}
})

client.on("message", message => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  if(message.content.toLowerCase() === "prefix") {
    message.channel.send(`**Prefix : **\`${prefix}\``)
  }
})
client.on("guildCreate", guild => {
     var prefix = ayarlar.prefix;
  db.set(`sunucudili_${guild.id}`, "EN")
  guild.owner.send(`:flag_tr: Türkçe :flag_tr:\n\`\`\`Botumuzu eklediğiniz için teşekkür ederiz <3\nBotumuzun yarım menüsüne ulaşmak için d!yardım\nPrefix'ini değiştirmek için d!prefix\nDilini değiştirmek için d!dil [TR , EN]\`\`\`\n\n:flag_us: English :flag_us:\n\`\`\`Thanks for adding bot <3 \nTo see bot's help menu d!help\nFor change bot Prefix d!prefix \nFor change Language d!language [TR, EN]\`\`\``);
let add = client.channels.get("810145639324581909")
const eklendim = new Discord.RichEmbed()

.setTitle(`Sunucuya Eklendim`)
.setTimestamp()
.setColor("GREEN")
.setThumbnail(guild.iconURL)
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

add.send(eklendim)

});

client.on("guildDelete", guild => {
let remove = client.channels.get("810145639324581909")
const atildim = new Discord.RichEmbed()

.setTitle(`Sunucudan Atıldım`)
.setTimestamp()
.setColor("RED")
.setThumbnail(guild.iconURL)
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

remove.send(atildim)

});
////////////// KOMUTLAR SON
require("./util/eventLoader")(client);


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});


client.login(process.env.token);