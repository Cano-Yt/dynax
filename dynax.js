
const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db")
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');


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


client.on("ready", () => client.channels.cache.get('810145611939840000').send("bot hazır"));



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
client.on('ready', async () => {// Can°B#1308
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function destructMS(milli) {
    if (isNaN(milli) || milli < 0) {
      return null;
    }
  
    var d, h, m, s;
    s = Math.floor(milli / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    var yazi;
    if (d !== 0) yazi = `${d} gün`;
    if (h !== 0 && yazi) yazi = yazi + `, ${h} saat`;
    if (h !== 0 && !yazi) yazi = `${h} saat`;
    if (m !== 0 && yazi) yazi = yazi + `, ${m} dakika`;
    if (m !== 0 && !yazi) yazi = `${m} dakika`;
    if (s !== 0 && yazi) yazi = yazi + `, ${s} saniye`;
    if (s !== 0 && !yazi) yazi = `${s} saniye`;
    if (yazi) return yazi;
    if (!yazi) return `1 saniye`;
  };
client.guilds.forEach(async guild => {
const asd = await db.fetch(`..başladı.${guild.id}`);
if(asd) {
const interval = setInterval(async function(){
const kalanzaman = asd.süre - Date.now()   
const c = await guild.channels.get(asd.channel).fetchMessage(asd.message);
if (kalanzaman <= 0) {
clearInterval(interval)
await sleep(50)
const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
  .setDescription(`**Ödül**: ${asd.ödül}

Başlatan: ${asd.host}`)
.setTimestamp(asd.süre)
  .setTitle(`Çekiliş bitti!`)
c.edit(embed)
db.delete(`çk.${c.id}`)
db.delete(`ödü.${c.id}`)
db.delete(`ma.${c.id}`)
const asdd = await c.reactions.get('🎉').fetchUsers({limit: c.reactions.get('🎉').count})
guild.channels.get(asd.channel).send(`Tebrikler, ${asdd.random()}! Bizden ${asd.ödül} kazandın.
Ödülünü alabilmek için: ${asd.host1} kişisine ulaş.`)
db.delete(`..başladı.${guild.id}`);
} else {
const kalanzamanyazi = destructMS(kalanzaman)
const embed2 = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
embed2.setDescription(`**Ödül**: ${asd.ödül}

Başlatan: ${asd.host}
Kalan zaman: ${kalanzamanyazi}

Katılmak için 🎉 tepkisine tıklayın.`)
c.edit(embed2)
                }
}, 5000)
}
})
})
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