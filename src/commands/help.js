const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Show all commands availables.',
    execute(message, args) {
        this.generateQRCode(message, args)
    },
    generateQRCode(message) {

        const embed = new MessageEmbed()
            .setColor('#8ADF65')
            .setTitle("Nuwe QR Generator - Command Help")
            .setURL("https://github.com/AlbertoLinde/NUWE-DiscordQR")
            .setDescription('This bot has been developed to generate QR codes. It is the third challenge from the website nuwe.io')
            .addFields(
                { name: '**Command**: `!qr [text] [color]`', value: 'This command create a QR code of the text that has been entered.\n**Example**: `!qr Test`' },
                { name: '**Command**: `!qrurl [url] [color]`', value: 'This command create a QR code of the URL that has been entered also check the URL is valid.\n**Example**: `!qr https://www.google.com blue`' },
                { name: '**Command**: `!user [color]`', value: 'Create a QR code with the username.\n**Example**: `!user blue`' },
                { name: '**Command**: `!help`', value: 'Show all the commands availables.\n**Example**: `!help`' }
            ).addField('BOT Created by Alberto Linde', 'https://github.com/AlbertoLinde/NUWE-DiscordQR')

        message.author.send(embed);
        message.channel.send(embed);
    }
}
