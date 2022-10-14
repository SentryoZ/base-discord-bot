// Require the necessary discord.js classes
const Discord = require("discord.js");
require('dotenv').config();

const token = process.env.DISCORD_TOKEN;

// Create a new client instance
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", message => {
    console.log(message)
});

// Login to Discord with your client's token
client.login(token).then(r => console.log("Logged in!"));