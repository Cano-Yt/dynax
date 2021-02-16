const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (message.author.id !== "351008627726876692" && message.author.id !== "786240484879237147") return message.channel.send(`Sahip olda gel koçum | For this command you must have Owner of the bot`);
  message.delete();
  message.channel.send(new Discord.MessageEmbed()
        .setColor("aaffff")
        .setTitle(`${client.user.username} - Reboot`)
        .setDescription("Botun yeniden başlatılmasını kabul ediyorsan `evet` yazmalısın.")
        .setFooter("15 Saniye içinde iptal olucaktır.", client.user.avatarURL)
        .setTimestamp()
    ).then(() => {
      message.channel.awaitMessages(response => response.content === "evet", {
          max: 1,
          time: 15000,
          errors: ["time"]
        }).then(collected => {message.channel.send(new Discord.MessageEmbed()
                .setColor("aaffff")
                .setTitle(`${client.user.username} - Reboot`)
                .setDescription("İzin alındı. Botu yeniden başlatıyorum.")
                .setFooter(`${client.user.username}`, client.user.avatarURL)
                .setTimestamp()
            ).then(msg => {
          console.log(`BOT : Yeniden Başlatılıyor... [ Başlatan yetkili: ${message.author.tag} ]`);
              process.exit(0);
            });
        }).catch(() => {message.channel.send(new Discord.MessageEmbed()
              .setColor("aaffff")
              .setTitle(`${client.user.username} - Reboot`)
              .setDescription("15 Saniye içinde `evet` demediğin için komut iptal oldu")
              .setFooter(`${client.user.username}`, client.user.avatarURL)
              .setTimestamp()
          );
        });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "reboot",
  description: "Botu Yeniden Başlatır.",
  usage: ""
};
