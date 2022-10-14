// Require the necessary discord.js classes
const {Client, GatewayIntentBits} = require('discord.js');
const env = require('dotenv').config()

const token = env.parsed.DISCORD_TOKEN;

// Create a new client instance
const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});


// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token).then(r => console.log("Logged in!"));