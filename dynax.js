
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

//Bilgilers
/*
"Prefix ayarlamak için client.on veya exports.run Altına " let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix; "" Koyun"

Bir rol'ü sunucuda bulmak için Komut'a "${message.guild.roles.cache.find(c => c.id === "Rol İD")}" Koyun
Bir kanal'ı sunucuda bulmak için Komut'a "message.guild.channels.cache.find(c => c.id === "Kanal İD")" Koyun

*/

const express = require("express");
const app = express();

app.get('/', (req, res) => res.send('Pudochuptime'))
app.listen(process.env.PORT, () => console.log('Port ayarlandı:' + process.env.PORT))


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

client.on("message", async(message) => {
if(await db.fetch(`afkoldu_${message.author.id}_${message.guild.id}`) == undefined) return;
  
const sebepp = await db.fetch(`afksebeb_${message.author.id}_${message.guild.id}`)
const sp = await db.fetch(`giriş_${message.author.id}_${message.guild.id}`)

  let atılmaay = moment(Date.now()+10800000).format("MM")
  let atılmagün = moment(Date.now()+10800000).format("DD")
  let atılmasaat = moment(Date.now()+10800000).format("HH:mm:ss")
  let atılma = `\`${atılmagün} ${atılmaay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${atılmasaat}\``
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`Afk sistemi`)
  .setDescription(`
  **${message.author.tag} Afk'lıktan çıktı
  **Sebebi : **\`${sebepp}\`
  **Giriş zamanı: **\`${sp}\`
  **Çıkış zamanı: **\`${atılma}\`
  `)
db.delete(`afksebeb_${message.author.id}_${message.guild.id}`)
db.delete(`afkoldu_${message.author.id}_${message.guild.id}`)
db.delete(`giriş_${message.author.id}_${message.guild.id}`)

})

client.on("guildMemberAdd", async member => {
let kanal = await db.fetch(`otorolkanal_${member.guild.id}`)
let rol = await db.fetch(`otoRol_${member.guild.id}`)
let dil = await db.fetch(`sunucudili_${member.guild.id}`)
if(!rol) return;
await member.roles.add(rol)
const embed = new Discord.MessageEmbed()
.setTitle(`${client.user.username} - Otorol sitemi`)
.setDescription(`
Sunucuya ${member} Adlı üye katıldı. Hoş geldin.
<@&${rol}> Adlı rol üyeye verildi.
Senin gelmenle ${member.guild.memberCount} Kişi olduk!`)
const embed1 = new Discord.MessageEmbed()
.setTitle(`${client.user.username} - Otorol sitemi`)
.setDescription(`
${member} Named member joined the server. **Welcome.**
<@&${rol}> Named role was give a role.
With your join we have total **${member.guild.memberCount}** Person!`)
if(dil == "TR") {
await client.channels.cache.get(kanal).send(embed);
}
if(dil == "EN") {
await client.channels.cache.get(kanal).send(embed1);
}    
})
client.on("guildMemberAdd", async member => {
  let sayı = await db.fetch(`sayacsayı_${member.guild.id}`);
  let kanal = await db.fetch(`sayackanal_${member.guild.id}`);
  let dil = db.fetch(`sunucudili_${member.guild.id}`)
  if (!sayı || !kanal) return;
  let sonuç = sayı - member.guild.memberCount;
  if(dil == "TR") {
    const embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} - Sayaç sistemi`)
    .setDescription(`
    Sunucuya ${member} katıldı.
    **${sayı}** kişi olmamıza {sonuç}** kişi kaldı.
    Toplamda **${member.guild.memberCount}** kişiyiz.
    `)
    await client.channels.cache.get(kanal).send(embed);
  }
  if(dil == "EN") {
    const embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} - Counter system`)
    .setDescription(`
    ${member} joined the server.
    There are **${sonuç}** people left for us to be **${sayı}** member.
    We have total **${member.guild.memberCount}** member.
    `)
    await client.channels.cache.get(kanal).send(embed);
  }
  return;
})

client.on("guildMemberRemove", async member => {
  let sayı = await db.fetch(`sayacsayı_${member.guild.id}`);
  let kanal = await db.fetch(`sayackanal_${member.guild.id}`);
  let dil = db.fetch(`sunucudili_${member.guild.id}`)
  if (!sayı || !kanal) return;
  let sonuç = sayı - member.guild.memberCount;
  if(dil == "TR") {
    const embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} - Sayaç sistemi`)
    .setDescription(`
    Sunucudan ${member} ayrıldı.
    **${sayı}** kişi olmamıza **${sonuç}** kişi kaldı.
    Toplamda **${member.guild.memberCount}** kişiyiz.
    `)
  }
  if(dil == "EN") {
    const embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} - Counter system`)
    .setDescription(`
    ${member} leaved the server.
    There are **${sonuç}** people left for us to be **${sayı}** member.
    We have total **${member.guild.memberCount}** member.
    `)
  }
  return;
})

client.on("message", async(message) => {
if(!message.guild) return;
  if(message.content.toLowerCase() === "prefix") {
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;    
    message.channel.send(`**Prefix : **\`${prefix}\``)
  }
})
client.on("message", async(message) => {
  if(!message.guild) return;
  if(message.content.toLowerCase() === "sa") {
    let selam = await db.fetch(`sa-as_${message.guild.id}`)
    if(selam == "acik") {
      return message.channel.send(`Aleyküm selam, hoşgeldin ${message.author} <a:cowiggle:811578710246424606>`)
    }
    if(selam !== "acik") {
      return;
    }
  }
})
client.on("guildCreate", guild => {
     var prefix = ayarlar.prefix;
  db.set(`sunucudili_${guild.id}`, "EN")
  guild.owner.send(`:flag_tr: Türkçe :flag_tr:\n\`\`\`Botumuzu eklediğiniz için teşekkür ederiz <3\nBotumuzun yarım menüsüne ulaşmak için d!yardım\nPrefix'ini değiştirmek için d!prefix\nDilini değiştirmek için d!dil [TR , EN]\`\`\`\n\n:flag_us: English :flag_us:\n\`\`\`Thanks for adding bot <3 \nTo see bot's help menu d!help\nFor change bot Prefix d!prefix \nFor change Language d!language [TR, EN]\`\`\``);
});
client.on("ready", () => {
  client.channels.cache.get("810141655704403998").join();
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

Discord.Constants.DefaultOptions.ws.properties.$browser = 'Discord Android'
client.login(process.env.token);