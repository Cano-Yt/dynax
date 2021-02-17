const ayarlar = require("../ayarlar.json")
const Discord = require("discord.js");
const db = require("quick.db")


exports.run = async(client, message, args) => {
  const nokta = ["https://images-ext-2.discordapp.net/external/aYX16WST6OQpHXqpyxdHZOH3nzg_sI2VFD4n-ritnps/https/cdn.weeb.sh/images/SJx7M0Ft-.gif?width=360&height=246","https://images-ext-2.discordapp.net/external/j9Pe_nvyuKw0eDyq8cjGjKv8SWdjSiKeCoEUmpDnVQg/https/cdn.weeb.sh/images/B1fnQyKDW.gif?width=360&height=202","https://images-ext-2.discordapp.net/external/noz5Hbpj1eqFgDogmIZnHfnbdt3o-jYpvdc5FikPLv8/https/cdn.weeb.sh/images/SkdyfWCSf.gif?width=360&height=202","https://images-ext-1.discordapp.net/external/Q6Dfu4O5xloHXJWF3573mck2Jyd0OY45SjlLzqLM6kU/https/cdn.weeb.sh/images/ry_RQkYDb.gif?width=360&height=171","https://images-ext-2.discordapp.net/external/sJSP2_YbnRcnXUFGZUHsYG5q_YjGDM8KkvV1ByJ-SOQ/https/cdn.weeb.sh/images/r1dc7yFvZ.gif?width=360&height=202","https://images-ext-2.discordapp.net/external/fidBWA0FTxe_HpmG0P5HFA4Kj6rWUEq6M9jp31ruvY0/https/cdn.weeb.sh/images/SJL3Q1Fvb.gif?width=360&height=226","https://images-ext-2.discordapp.net/external/Fcx01c7HUYkTuDmDNSM7qSKaD0e9r-WecJIa2e8wXcY/https/cdn.weeb.sh/images/B1oCmkFw-.gif?width=360&height=203","https://images-ext-1.discordapp.net/external/0aqsoVra7xRRbspvHkog9G0pNxbfw-P5riXBzXiqqNQ/https/cdn.weeb.sh/images/ryv3myFDZ.gif?width=360&height=202","https://images-ext-2.discordapp.net/external/WkmXB4tLecPn84ExvOOo3hEj79aYajdKC91pe1wzc38/https/cdn.weeb.sh/images/SkKn-xc1f.gif?width=360&height=201","https://images-ext-1.discordapp.net/external/PhJpW5tT3ihxKqvUnQou8lESNPazqPCCMbO3bXiJW6I/https/cdn.weeb.sh/images/Hk6JVkFPb.gif?width=360&height=202","https://images-ext-2.discordapp.net/external/VT5Wb1dtOIrEa9CRpVB2hmYxFBBLnxzFWMtDJqwpFF4/https/cdn.weeb.sh/images/rJgTQ1tvb.gif?width=360&height=202","https://images-ext-1.discordapp.net/external/kKPoux8Dyp6hUoj1q_P-FBpr-U1CHUiovEd9H2bvW_w/https/cdn.weeb.sh/images/ryn_Zg5JG.gif?width=360&height=202","https://images-ext-2.discordapp.net/external/9gFtW--lfzdiNdi5ZFRWufSLPcFaKz9qe0sxVUk-PXk/https/cdn.weeb.sh/images/r1lxO_QIf.gif?width=360&height=202","https://images-ext-2.discordapp.net/external/O_4TE883f7rySd5tYIZ2ZT76mu-W_XHafFWJJ4bYrHs/https/cdn.weeb.sh/images/SkNimyKvZ.gif?width=360&height=202"];
  const response = nokta[Math.floor(Math.random() * nokta.length)];
  message.channel.send(response);
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'deneme',
    description: '',
    usage: ''
  };