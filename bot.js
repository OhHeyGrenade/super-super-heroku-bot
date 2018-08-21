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

client.user.setActivity(`Working hard to earn byts!`);



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
