const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('>> Oynuyor kısmı başarıyla güncellendi. <<');
console.log(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
console.log('>> Bot Hazır Giriş Yapıldı! <<');

    setInterval(function() {
    
        client.user.setGame("Fire 0.1k", `https://www.twitch.tv/discord`)
        },);
}; 