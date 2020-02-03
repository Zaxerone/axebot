<<<<<<< HEAD
"use strict";

const avatar = require("./../Resolver/avatar");

module.exports = {
  name: "avatar",
  aliases: ["pp", "pdp"],
  description: "affiche l'avatar d'une personne",
  category: "fun",
  cooldown: 3,
  async execute(client, { args, channel, user, message }) {
    var messageLoading = await channel.send("Chargement en cours...");
    var userSearch = args.shift();
    if (!userSearch) userSearch = user;
    else
      userSearch =
        client.users.find(user => user.username === userSearch) ||
        client.users.get(userSearch) ||
        message.mentions.users.first() ||
        user;
    if (!userSearch) {
      messageLoading.delete({ timeout: 0 });
      throw TypeError(
        `L'utilisateur n'à pas pu être selectionné ! -args > ${userSearch} userSearch`
      );
    }
    let URL = avatar(userSearch.id, userSearch.avatar);
    channel
      .send({
        embed: {
          title: `**Photo de profil de ${userSearch.tag}**`,
          image: {
            url: URL
          }
        }
      })
      .then(() => {
        messageLoading.delete({ timeout: 0 });
      })
      .catch(console.error);
  }
};
=======
'use strict';

const { MessageAttachment } = require('discord.js');
const buffer = require('./../Resolver/Buffer');
const avatar = require('./../Resolver/avatar');

module.exports = {
    name: 'avatar',
    aliases: ['pp', 'pdp'],
    description: 'affiche l\'avatar d\'une personne',
    cooldown: 3,
    async execute(client, { args, channel, user, message }) {
        var messageLoading = await channel.send('<a:bluba_roll:649688888968740867>');
        var userSearch = args.shift();
        if (!userSearch) userSearch = user;
        else userSearch = client.users.find(user => user.username === userSearch) ||
        client.users.get(userSearch) || message.mentions.users.first() || user;
        if (!userSearch) {
            messageLoading.delete({ timeout: 0 });
            throw TypeError(`L'utilisateur n'à pas pu être selectionné ! -args > ${userSearch} userSearch`);
        };
        let URL = await avatar(userSearch.id, userSearch.avatar);
        const pp = new MessageAttachment(await buffer(URL), `${userSearch.username}-pp${URL.replace('?size=2048', '').endsWith('.gif') ? '.gif' : '.png'}`);
        channel.send({ files:[pp] }).then(() => {
            messageLoading.delete({ timeout: 0 });
        }).catch(console.error);
    },
};
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
