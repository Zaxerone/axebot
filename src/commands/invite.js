<<<<<<< HEAD
"use strict";

module.exports = {
  name: "invite",
  aliases: [],
  description: "envoie le lien du bot",
  guildOnly: false,
  cooldown: 5,
  category: "utile",
  async execute(client, { channel }) {
    channel.send(`${await client.generateInvite(["ADMINISTRATOR"])}`);
  }
=======
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
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
};
