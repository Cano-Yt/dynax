const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
let dil = db.fetch(`sunucudili_${message.guild.id}`)
if(dil = "TR") {
  const onayembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setAuthor("Nuke sistemi")
  .setFooter("Onaylamak için 👍 emojisine, Red etmek içinse 👎 emojisine tıklayabilirsiniz")
  .setDescription("**UYARI!** \n\nEğer nuke işlemini onaylarsanız bu kanal kalıcı olarak **silinecek**,\n**geri getirilemeyecektir!**\nAncak bu kanalın **kopyası oluşturulacaktır!** \n")
  message.channel.send(onayembed).then(msg => {
msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
      message.channel.clone({position: message.channel.position}).then(message => message.send("https://tenor.com/view/explosion-boom-explode-gif-17383346", `Bu kanal Patlatıldı!`).then(message => message.send("https://media.tenor.com/videos/dd837defa87583a15782fd2bcc275147/mp4")))
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
  if(dil = "EN") {
      const onayembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setAuthor("Nuke System")
  .setFooter("Onaylamak için 👍 emojisine, Red etmek içinse 👎 emojisine tıklayabilirsiniz")
  .setDescription("**UYARI!** \n\nEğer nuke işlemini onaylarsanız bu kanal kalıcı olarak **silinecek**,\n**geri getirilemeyecektir!**\nAncak bu kanalın **kopyası oluşturulacaktır!** \n")
  message.channel.send(onayembed).then(msg => {
msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
      message.channel.clone({position: message.channel.position});
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