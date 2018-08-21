const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    
    bot.user.setGame('Earning byts!; Bot Built by Shocky')
});

client.on('message', message => {
    if (message.content === '//joke') {
    	message.reply('yo mama so fat that when she joined the discord server, she broke it. OHHHHHHHHHHH!!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
