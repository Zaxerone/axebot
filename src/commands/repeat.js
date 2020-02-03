<<<<<<< HEAD
"use strict";
const { WebhookClient } = require('discord.js');

module.exports = {
  name: "repeat",
  aliases: [],
  description: "Repete ce que l'utilisateur dit",
  guildOnly: true,
  cooldown: 5,
  category: "fun",
  execute(client, { message, args, channel }) {
    if (args.join(" ") == '') return channel.send("Veuillez définir un message");
    channel.send(args.join(" "))
    .then(() => message.delete({ timeout: 0 }))
  }
};
=======
'use strict';

module.exports = {
    name: 'repeat',
    aliases: [],
    description: 'Repete ce que l\'utilisateur dit',
    guildOnly: true,
    cooldown: 5,
    execute(client, { message, args, channel }) {
        channel.send(args.join(' '));
        message.delete({ timeout: 3000 }).then(console.log('Un message a été supprimé !'));
    }
}
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
