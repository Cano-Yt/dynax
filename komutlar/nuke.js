const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
let dil = db.fetch(`sunucudili_${message.guild.id}`)
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix    
    let bakım = db.fetch(`bakım`) 
if(bakım == "bakımda") {
 if(dil=="TR") return message.channel.send(`Bot bakımda!\nLütfen destek sunucumuza gelerek sorunu öğreniniz. Gelmel için ${prefix}davet`)
 if(dil=="EN") return message.channel.send(`Bot repairing!\nPlease come support server and learn the problem. To come ${prefix}invite`)
} else {
if(dil == "TR") {
  if(!message.author.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için \`Yönetici\` Yetkisine sahip olmalısın.`)
  const onayembed = new Discord.MessageEmbed()
  .setColor("aaffff")
  .setTimestamp()
  .setAuthor("Nuke sistemi")
  .setFooter("Onaylamak için 👍 emojisine, Red etmek içinse 👎 emojisine tıklayabilirsiniz")
  .setDescription("**UYARI!** \n\nEğer nuke işlemini onaylarsanız bu kanal kalıcı olarak **silinecek**,\n**geri getirilemeyecektir!**\nAncak bu kanalın **kopyası oluşturulacaktır!** \n")
  return message.channel.send(onayembed).then(msg => {
msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
      message.channel.clone({position: message.channel.position}).then(message => message.send(new Discord.MessageEmbed().setColor("aaffff").setTitle(`Bu kanal patlatıldı!`).setImage("https://tenor.com/view/explosion-boom-explode-gif-17383346")))
      message.channel.delete();
		} else {
			message.channel.send('Nuke işlemi iptal edildi!');
      msg.delete({timeout:3000})
		}
	})
	.catch(collected => {
		message.channel.send('Bir hatayla karşılaştık! Lütfen daha sonra tekrar deneyiniz.');
	});
  
})
}
  if(dil == "EN") {
  if(!message.author.hasPermission("ADMINISTRATOR")) return message.channel.send(`You must have \`Administrator\` Permission to use this command.`)
      const onayembed = new Discord.MessageEmbed()
  .setColor("aaffff")
  .setTimestamp()
  .setAuthor("Nuke System")
  .setFooter("You can click on the 👍 emoji to confirm or the 👎 emoji to Decline")
  .setDescription("**Warning!** \nIf you confirm nuke **this channel will be permanently deleted**\n**cannot be restored!**\nBut **this channel will be duplicated!** \n")
  message.channel.send(onayembed).then(msg => {
msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
      message.channel.clone({position: message.channel.position}).then(message => message.send(new Discord.MessageEmbed().setColor("aaffff").setTitle(`This channel nuked!`).setImage("https://tenor.com/view/explosion-boom-explode-gif-17383346")))
      message.channel.delete();
		} else {
			message.channel.send('Nuke operation canceled!');
      msg.delete({timeout:3000})
		}
	})
	.catch(collected => {
		message.channel.send('We encountered an error! Please try again later.');
	});
  
})
  }
}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = { 
	name: 'nuke', 
  description: "Bot bulunduğunuz kanalı siler ve yeniden oluşturur.",
  usage: 'nuke'
}