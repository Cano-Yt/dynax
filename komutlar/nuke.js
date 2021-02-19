const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
let dil = db.fetch(`sunucudili_${message.guild.id}`)
if(dil == "TR") {
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