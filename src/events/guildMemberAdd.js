<<<<<<< HEAD
"use strict";

const msgResolver = require("./../Resolver/Replaces");

module.exports = async (client, member) => {
  const settings = await client.getGuild(member.guild);
  if (settings.welcomeChannel === null) return false;
  const channel = member.guild.channels.find(
    channel => channel.name == settings.welcomeChannel || channel.id == settings.welcomeChannel
  );
  if (!channel) return false;

  const resolved = await msgResolver(settings.welcomeMessage, {
    member: member
  });

  channel.send(resolved);
=======
'use strict';

const msgResolver = require('./../Resolver/Replaces');

module.exports = async (client, member) => {
    const settings = await client.getGuild(member.guild);
    if (settings.welcomeChannel === null) return false;
    const channel = member.guild.channels.get(settings.welcomeChannel);
    if (!channel) return false;
    channel.send(msgResolver(settings.welcomeMessage, { member: member }));
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
};