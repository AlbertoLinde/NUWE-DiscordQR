const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

const QRCode = require('qrcode')

/**
 * Filter to avoid the use of switch.
 */
const COLORS = {
    RED: '#F13434',
    BLUE: '#08BBD4',
    ORANGE: '#EEB913',
    GREEN: '#8ADF65',
    BLACK: '#000000',
};

module.exports = {
    name: 'user',
    description: 'Returns QR code with user name',
    execute(message, args) {
        this.generateQRCode(message, args)
    },
    generateQRCode(message, args) {

        let colorSelected = COLORS[args[0]?.toUpperCase()] || COLORS.BLACK;
        let userName = `${message.author.username}#${message.author.discriminator}`

        QRCode.toDataURL(userName, {
            color: {
                dark: colorSelected,
                light: '#FFFFFF'
            }
        }, function generateEmbed(err, url) {
            if (err) {
                message.channel.send("💥 Can't generate your QR. Please, try again.");
            }

            /** Get the QR and don't save the file, stay on the buffer and use as attachment in the embed message */
            const buffer = new Buffer.from(url.split(',')[1], 'base64');
            const file = new Discord.MessageAttachment(buffer, 'img.png');

            const embed = new MessageEmbed()
                .setColor(COLORS.GREEN)
                .setTitle("Nuwe QR Generator")
                .attachFiles(file)
                .setImage('attachment://img.png')
                .setDescription(`${message.author} your QR code has been generated.`)
                .setFooter("BOT Created by Alberto Linde", "https://avatars.githubusercontent.com/u/44638858?s=400&u=b1b1027ca6baa155842a21beeefb8a800f85e7ec&v=4")
                .setURL("https://github.com/AlbertoLinde/NUWE-DiscordQR");

            /** Send the message to the channel on Discord and send DM to the user */
            message.author.send(embed);
            message.channel.send(embed);
        });
    }
};