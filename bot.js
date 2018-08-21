const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    
});

client.on('message', message => {
    if (message.content === '//joke') {
    	message.reply('yo mama so fat that when she joined the discord server, she broke it. OHHHHHHHHHHH!!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
// async req

module.exports.run = async (bot, message, args) => {

if(message.author.id !== "423194335476056064") return message.channel.send("You may not use this command because you're not a developer.");

if(args[1] == "online") return bot.user.setStatus("online");

if(args[1] == "dnd") return bot.user.setStatus("dnd");

if(args[1] == "invisible") return bot.user.setStatus("invisible");

if(args[1] == "idle") return bot.user.setStatus("idle");

}
