
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
client.on("guildCreate", (guild) => {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
  let invite = guild.createInvite( { maxAge: 0 })
  const embed = new Discord.MessageEmbed()
  .setAuthor(`Bir Sunucuya Katıldım`)
  .addField(`Sunucunun adı`, guild.name)
  .addField(`Sunucunun Id'si`, guild.id)
  .addField(`Sunucudaki kişi sayısı`, guild.memberCount)
  .addField(`Sunucunun bölgesi`, guild.region)
  .addField(`Kanallar | Roller`, `${guild.channels.cache.size} ${guild.roles.cache.size}`)
  .addField(`Kuruluş zamanı`, `${guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(guild.createdAt)})`)
  .addField(`Toplam | Üyeler | Botlar`, `${guild.members.cache.size} | ${guild.members.cache.filter(member => !member.user.bot).size} | ${guild.members.cache.filter(member => member.user.bot).size}`)
  .addField(`Sunucunun daveti`, `$https://discord.gg/{invite.code}`)
  .setThumbnail(guild.iconURL())
  })
client.on("guildDelete", (guild) => {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
  let invite = guild.createInvite( { maxAge: 0 })
  const embed = new Discord.MessageEmbed()
  .setAuthor(`Bir Sunucudan Atıldım`)
  .addField(`Sunucunun adı`, guild.name)
  .addField(`Sunucunun Id'si`, guild.id)
  .addField(`Sunucudaki kişi sayısı`, guild.memberCount)
  .addField(`Sunucunun bölgesi`, guild.region)
  .addField(`Kanallar | Roller`, `${guild.channels.cache.size} ${guild.roles.cache.size}`)
  .addField(`Kuruluş zamanı`, `${guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(guild.createdAt)})`)
  .addField(`Toplam | Üyeler | Botlar`, `${guild.members.cache.size} | ${guild.members.cache.filter(member => !member.user.bot).size} | ${guild.members.cache.filter(member => member.user.bot).size}`)
  .addField(`Sunucunun daveti`, `$https://discord.gg/{invite.code}`)
  .setThumbnail(guild.iconURL())
  })

client.on("message", async(message) => {
if(!message.guild) return;
if(await db.fetch(`afkoldu_${message.author.id}_${message.guild.id}`) == undefined) return;

let dil = await db.fetch(`sunucudili_${message.guild.id}`)
const sebepp = await db.fetch(`afksebeb_${message.author.id}_${message.guild.id}`)
const sp = await db.fetch(`giriş_${message.author.id}_${message.guild.id}`)

if(dil == "TR") {
  moment.locale("tr")
  let atılmaay = moment(Date.now()+10800000).format("MM")
  let atılmagün = moment(Date.now()+10800000).format("DD")
  let atılmasaat = moment(Date.now()+10800000).format("HH:mm:ss")
  let atılma = `\`${atılmagün} ${atılmaay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${atılmasaat}\``
  const embed = new Discord.MessageEmbed()
  .setTitle(`Afk sistemi`)
  .setDescription(`
  **${message.author.tag} Afk'lıktan çıktı**
  **Sebebi :** \`${sebepp}\`
  **Giriş zamanı:** ${sp}
  **Çıkış zamanı:** ${atılma}
  `)
  message.channel.send(embed).then(m => m.delete({ timeout: 10000}))
await db.delete(`afksebeb_${message.author.id}_${message.guild.id}`)
await db.delete(`afkoldu_${message.author.id}_${message.guild.id}`)
await db.delete(`giriş_${message.author.id}_${message.guild.id}`)
}
  if(dil == "EN") {
  moment.locale("en")
  let atılmaay = moment(Date.now()+10800000).format("MM")
  let atılmagün = moment(Date.now()+10800000).format("DD")
  let atılmasaat = moment(Date.now()+10800000).format("HH:mm:ss")
  let atılmaen = `\`${atılmagün} ${atılmaay.replace(/01/, 'January').replace(/02/, 'February').replace(/03/, 'March').replace(/04/, 'April').replace(/05/, 'May').replace(/06/, 'June').replace(/07/, 'July').replace(/08/, 'August').replace(/09/, 'September').replace(/10/, 'October').replace(/11/, 'November').replace(/12/, 'December')} ${atılmasaat}\``
  const embed = new Discord.MessageEmbed()
  .setTitle(`Afk system`)
  .setDescription(`
  **${message.author.tag} exit the afk mode**
  **Sebebi :** \`${sebepp}\`
  **Entry time:** ${sp}
  **Exit time:** ${atılmaen}
  `)
  message.channel.send(embed).then(m => m.delete({ timeout: 10000}))
await db.delete(`afksebeb_${message.author.id}_${message.guild.id}`)
await db.delete(`afkoldu_${message.author.id}_${message.guild.id}`)
await db.delete(`giriş_${message.author.id}_${message.guild.id}`)
  }
})
client.on("message", async(message) => {
if(!message.guild) return;
  let member = message.mentions.members.first()
  if(!member) return;
  let dil = await db.fetch(`sunucudili_${message.guild.id}`)
  if(member.id == message.author.id) return;
  let afk = await db.fetch(`afkoldu_${member.id}_${message.guild.id}`)
  if(afk !== "evet") return;
  const sebepp = await db.fetch(`afksebeb_${member.id}_${message.guild.id}`)
  const sp = await db.fetch(`giriş_${member.id}_${message.guild.id}`)
if(dil == "TR") {
  const embed = new Discord.MessageEmbed()
  .setTitle(`Afk sistemi`)
  .setDescription(`
  **${member.user.tag} Afk**
  **Sebebi : **\`${sebepp}\`
  **Giriş zamanı: **\`${sp}\`
  `)
  .setThumbnail("https://cdn.discordapp.com/attachments/783001757596254238/811956462666514442/811586592102940704.png")
  message.channel.send(embed).then(m => m.delete({ timeout: 10000}))
}
  if(dil == "EN") {
   const embed = new Discord.MessageEmbed()
  .setTitle(`Afk system`)
  .setDescription(`
  **${member.user.tag} is Afk**
  **Reason : **\`${sebepp}\`
  **Entry time: **\`${sp}\`
  `)
  .setThumbnail("https://cdn.discordapp.com/attachments/783001757596254238/811956462666514442/811586592102940704.png")
  message.channel.send(embed).then(m => m.delete({ timeout: 10000}))
  }
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
Sunucuya ${member} Adlı üye katıldı. **Hoş geldin.**
<@&${rol}> Adlı rol üyeye verildi.
Senin gelmenle **${member.guild.memberCount}** Kişi olduk!`)
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
  let dil = await db.fetch(`sunucudili_${member.guild.id}`)
  if (!sayı || !kanal) return;
  let sonuç = sayı - member.guild.memberCount;
  if(dil == "TR") {
    const embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} - Sayaç sistemi`)
    .setDescription(`
    Sunucuya ${member} katıldı.
    **${sayı}** kişi olmamıza **{sonuç}** kişi kaldı.
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
  let dil = await db.fetch(`sunucudili_${member.guild.id}`)
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