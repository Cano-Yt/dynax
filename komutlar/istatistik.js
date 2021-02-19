const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")
const moment = require('moment');
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');


exports.run = async(client, message, args) => {
    let dil = db.fetch(`sunucudili_${message.guild.id}`)
    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix    
      let bakım = db.fetch(`bakım`) 
      if(bakım == "bakımda") {
            if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
    if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
  }else{
  
   
  let mesaj; {
 if(dil == "TR") {message.channel.send(`Lütfen bekleyiniz **${client.user.username}**'in istatistiklerini alıyoruz`)}
 if(dil == "EN") {message.channel.send(`Please wait we are getting statistics of **${client.user.username}**`)}
  }
      var osType = await os.type();
		if (osType === 'Darwin') osType = 'macOS'
		else if (osType === 'Windows') osType = 'Windows'
		else osType = os.type();
    var osBit = await os.arch();
    if (osBit === 'x64') osBit = '64 Bit'
    else if (osBit === 'x82') osBit = '32 Bit'
    else osBit = os.arch();

    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
      
        if(dil == "TR") {
        const s = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${client.user.username} | İstatistikler`, client.user.avatarURL())
        .addField('Gecikme süreleri', `Mesaj Gecikmesi: **${new Date().getTime() - message.createdTimestamp}** ms \nBot Gecikmesi: **${client.ws.ping}** ms`)
        .addField('Çalışma süresi', `${duration}`, true)
        .addField('Genel veriler', stripIndents`
        **Kullanıcı Sayısı:**  ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
        **Sunucu Sayısı:** ${client.guilds.cache.size.toLocaleString()}
        **Kanal Sayısı:** ${client.channels.cache.size.toLocaleString()}
        `, true)
        .addField('Versiyonlar', stripIndents`
        **Discord.JS sürümü** v${Discord.version}
        **NodeJS sürümü** ${process.version}
        `, true)
        .addField('Kullanılan bellek boyutu', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()} MB`, true)
        .addField('İşletim sistemi', `${osType} ${osBit}`, true)
        
        .addField('İşlemci', `\`\`\`xl\n${os.cpus().map(i => `${i.model}`)[0]}\n\`\`\``)
        .setImage("https://media.discordapp.net/attachments/793827180513198100/810128122586202132/standard_2.gif") 
        message.channel.send(s).then(mesaj.delete({timeout:1000}))
        }
        if(dil == "EN") {
        const duration = moment.duration(client.uptime).format('D [day], H [hours], m [minute], s [seconds]');
      
        const s = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${client.user.username} | Statistics`, client.user.avatarURL())
        .addField('Delay times', `Message delay: **${new Date().getTime() - message.createdTimestamp}** ms \nBot delay: **${client.ws.ping}** ms`)
        .addField('Uptime', `${duration}`, true)
        .addField('General data', stripIndents`
        **Members number:**  ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
        **Servers number:** ${client.guilds.cache.size.toLocaleString()}
        **Channels number:** ${client.channels.cache.size.toLocaleString()}
        `, true)
        .addField('Versions', stripIndents`
        **Discord.JS version** v${Discord.version}
        **NodeJS version** ${process.version}
        `, true)
        .addField('Memory size', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()} MB`, true)
        .addField('OS', `${osType} ${osBit}`, true)
        
        .addField('Processor', `\`\`\`xl\n${os.cpus().map(i => `${i.model}`)[0]}\n\`\`\``)
        .setImage("https://media.discordapp.net/attachments/793827180513198100/810113577511419914/standard.gif")
        message.channel.send(s).then(mesaj.delete({timeout:1000}))
}
  })
 }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["i","istatik","statistic"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'istatistik',
    description: '',
    usage: ''
  };