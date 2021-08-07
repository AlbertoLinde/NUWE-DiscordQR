const utils = require("../utils/utils");
const { MessageEmbed } = require('discord.js');


module.exports = {
	name: 'urltoqr',
	description: 'Convert a URL to QR',
	execute(message, args) {
		if (utils.isUrl(args[0])) {
			this.sendEmbed(message, this.generateEmbed(message, args));
		}else{
			message.channel.send(`❗ ERROR ${message.author} check the URL.`)
		}

	},

	generateEmbed(message, args) {
		const embed = new MessageEmbed()
			.setColor(0x318735)
			.setTitle("Nuwe QR Generator")
			.setImage(`https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${args[0]}`)
			.setDescription(`${message.author} your QR code has been generated.`)
			.setFooter("BOT Created by Alberto Linde", "https://avatars.githubusercontent.com/u/44638858?s=400&u=b1b1027ca6baa155842a21beeefb8a800f85e7ec&v=4")
			.setURL("https://github.com/AlbertoLinde/NUWE-DiscordQR");
		return embed;
	},

	sendEmbed(message, embed) {
		message.author.send(embed);
		message.channel.send(embed);
	}

};


