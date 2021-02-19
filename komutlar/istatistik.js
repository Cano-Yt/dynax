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
  
  var m = await message.channel.send(`Lütfen bekleyiniz istatistikler alınıyor`)
  
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
      
   setTimeout(() => {
        const s = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${client.user.username} | İstatistikler`, client.user.avatarURL())
        .addField('Gecikme süreleri', `Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} milisaniye \nBot Gecikmesi: {ping2} milisaniye`.replace("{ping1}", new Date().getTime() - message.createdTimestamp).replace("{ping2}", client.ping), true)
        .addField('Çalışma süresi', `${duration}`, true)
        .addField('Genel veriler', stripIndents`
        **Kullanıcı Sayısı:**  ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
        **Sunucu Sayısı:** ${client.guilds.size.cache.toLocaleString()}
        **Kanal Sayısı:** ${client.channels.cacge.size.toLocaleString()}
        `, true)
        .addField('Versiyonlar', stripIndents`
        **Discord.JS sürümü** v${Discord.version}
        **NodeJS sürümü** ${process.version}
        `, true)
        .addField('Kullanılan bellek boyutu', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()} MB`, true)
        .addField('İşletim sistemi', `${osType} ${osBit}`, true)
        
        .addField('İşlemci', `\`\`\`xl\n${os.cpus().map(i => `${i.model}`)[0]}\n\`\`\``)
        return m.edit(s)
        }, 3000)
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