'use strict';

const msgResolver = require('./../Resolver/Replaces');

module.exports = async (client, member) => {
    const settings = await client.getGuild(member.guild);
    if (settings.welcomeChannel === null) return false;
    const channel = member.guild.channels.get(settings.welcomeChannel);
    if (!channel) return false;
    channel.send(msgResolver(settings.welcomeMessage, { member: member }));
};