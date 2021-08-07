const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

const QRCode = require('qrcode')
const utils = require("../utils/utils");

// TODO: Maybe refactor this file, have the same code as QR URL, just add and check the difference beetween the command.

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
    name: 'qr',
    description: 'Convert any string to QR Code.',
    execute(message, args) {
        if (args[0]) {
            this.generateQRCode(message, args)
        } else if (utils.isUrl(args).length < 1) {
            message.channel.send(`❗ ERROR ${message.author}, need to provide one String.`)
        }
    },
    generateQRCode(message, args) {

        let colorSelected = COLORS[args[1].toUpperCase()] || COLORS.BLACK;

        QRCode.toDataURL(args[0], {
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