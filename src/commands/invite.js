'use strict';

module.exports = {
    name: 'invite',
    aliases: [],
    description: 'envoie le lien du bot',
    guildOnly: false,
    cooldown: 5,
    async execute(client, { channel }) {
        channel.send(`${await client.generateInvite(['ADMINISTRATOR'])}`);
    },
};
