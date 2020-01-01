'use strict';

const buffer = require('./../Resolver/Buffer');
const { Canvas } = require("canvas-constructor");
const { resolve, join } = require('path');
const { MessageAttachment } = require('discord.js');
const avatar = require('./../Resolver/avatar');
Canvas.registerFont(resolve(join(__dirname, "./../../asset/fonts/Orbitron-regular.ttf")), "Discord");

module.exports = {
    name: 'profile',
    aliases: [],
    description: 'Affiche le profile du user',
    guildOnly: true,
    cooldown: 10,
    async execute(client, { message, channel, guild, user, args }) {
        let argsUser = args.join(' ');
        var searchUser;
        try {
            searchUser = message.mentions.users.first() ||
            client.users.get(argsUser) ||
            guild.member(client.users.find(user => user.username === argsUser)).user ||
            client.users.find(user => user.tag === argsUser);
        } catch (e) {
            if (argsUser > 0) channel.send(`Je n'est pas trouvé l'utilisateur !\n\`\`\`${e.message}\`\`\``)
            searchUser = user;
        };
        var messageLoading = await channel.send('<a:bluba_roll:649688888968740867>');
        var S_User = await client.getUser(searchUser); 
        let GuildFound = await S_User.guildData.find(g => g.guildID === guild.id);
        if (!GuildFound) return channel.send(`${searchUser} n'a pas de données dans se serveur !\nEssayer de parler au moins 1 fois`).then(() => {
            messageLoading.delete({ timeout: 0 });
        });
        let messageCount = await GuildFound.messageSize;
        let xp = Math.floor(Number(messageCount / 2));
        let lvl = Math.floor(messageCount / client.config.lvl);

        /* graphique */
        const Mit = new Canvas(1193, 673)
            .save()
            .addImage(await buffer('http://149.202.102.54/images/profile.png'), 0, -32, 1193, 673)
            .setColor('#ffff')
            .setTextFont("45px Discord")
            .save()
            .addText(searchUser.username, 150, 600, 200)
            .addText(lvl, 880, 220, 200)
            .addText(xp, 830, 272, 200)
            .addText(S_User.serenity, 920, 344, 200)
            .addText(S_User.rep, 830, 384, 200)
            .save()
            .addRoundImage(await buffer(await avatar(searchUser.id, searchUser.avatar)), 91, 140, 370, 370, 185)
            .restore()
            .save()
            .toBuffer()
        const MitResolver = await new MessageAttachment(Mit, `Profile-${searchUser.username}.png`);
        await channel.send({ files: [MitResolver] }).catch(e => {
            messageLoading.delete({ timeout: 0 });
            channel.send(`imossible d'envoyer le message **${e.message}**`);
        })
        return messageLoading.delete({ timeout: 0 });
    }
};
