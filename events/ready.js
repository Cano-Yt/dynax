const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  client.user.setStatus("online");

var oyun = ["Dynax+ ❤","Sude ❤ Can",`Prefix Öğrenmek İçin "Prefix"`]

setInterval(function() {

var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

client.user.setActivity(oyun[random]);
}, 2 * 2500);

};
