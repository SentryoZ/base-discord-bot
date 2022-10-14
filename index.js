// Require the necessary discord.js classes
const {GatewayIntentBits, Client} = require("discord.js");
require('dotenv').config();

const token = process.env.DISCORD_TOKEN;

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent // This is required to get the message content,
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", message => {
    // check if the message is "ping"
    if (message.content === "ping") {
        // send back "Pong." to the channel the message was sent in
        message.reply("Pong.");
    }

    // check if the message is "give me admin role"
    if (message.content === "give me admin role") {
        // check if exists admin role
        if (message.guild.roles.cache.find(role => role.name === "admin")) {
            // add the role to the user
            message.member.roles.add(message.guild.roles.cache.find(role => role.name === "admin"));

            // send a message to the channel
            message.reply("You have been given the admin role");
        } else {
            // create the role
            message.guild.roles.create({
                name: 'admin',
                color: 'BLUE',
                reason: 'we needed a role for admins',
            }).then(r => {
                // add the role to the user
                message.reply("I created the admin role for you");
                console.log(`Created new role with name ${r.name} and color ${r.color}`);
                message.member.roles.add(r);
            })
        }
    }

    // check if the message is "remove my admin role"
    if (message.content === "remove my admin role") {
        // check if exists admin role
        if (message.guild.roles.cache.find(role => role.name === "admin")) {
            // remove the role from the user
            message.member.roles.remove(message.guild.roles.cache.find(role => role.name === "admin"));
            // send a message to the channel
            message.reply("You have been removed the admin role");
        }
    }

    // check if the message is "wash my hands pls"
    if (message.content === "wash my hands pls") {
        //send a message to the channel
        message.channel.send("Washing hands...").then(msg => {
            //after 5 seconds, edit the message
            setTimeout(() => {
                msg.edit("Washed hands!");
            }, 5000);
        })

    }

    // check if the message includes in lowercase "Rick Astley" or "Rickroll" or "roll me"
    if (message.content.toLowerCase().includes("rick astley") || message.content.toLowerCase().includes("rickroll") || message.content.toLowerCase().includes("roll me")) {
        // send a link to Rick Astley's Never Gonna Give You Up
        message.reply("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
});


// Login to Discord with your client's token
client.login(token).then(() => console.log("Logged in!"));