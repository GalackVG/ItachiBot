const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Bot by Galack, %help");
    console.log("ItachiBot à bien été connecter");
});

bot.login("NDE2NjE2ODgwMDg2ODQzMzk0.DXHERw.aLjis5OVMKm3xCX5xbNof_eaCv8");
