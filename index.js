const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

require("dotenv").config();

client.commands = new Discord.Collection();

const prefix = "!";
const commandUrl = './src/commands';

const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`${commandUrl}/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('LOG: Error to retrieve data from command. Please, check if all commands are loaded first.');
	}
});



client.once('ready', () => {
	console.log('🤖 NUWE - QR Generator: ON');
});



client.login(process.env.DISCORD_TOKEN);

