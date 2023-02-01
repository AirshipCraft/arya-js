require("dotenv").config();

const { Client, Events, GatewayIntentBits } = require('discord.js');
// const { token } = require('./config.json');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("error", console.error);

// client.login(token);
client.login(process.env.DISCORD_TOKEN);