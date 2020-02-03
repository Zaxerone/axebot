<<<<<<< HEAD
"use strict";

const BankSystem = require("./../lib/BankSystem");
//const buffer = require('./../Resolver/Buffer');
//const { MessageAttachment } = require('discord.js');
//const file = new MessageAttachment('./asset/images/bank.png', 'bank.png');
const Avatar = require("./../Resolver/avatar");

module.exports = {
  name: "bank",
  aliases: [],
  description: "Systeme Bank",
  guildOnly: true,
  cooldown: 1,
  category: "economie",
  async execute(
    client,
    { message, args, guild, member, user, channel, S_Guild, S_User }
  ) {
    var ElementPrimarie = args.shift();
    const Librairie = {
      message,
      args,
      guild,
      member,
      user,
      channel,
      S_Guild,
      S_User
    };
    switch (ElementPrimarie) {
      case "give":
        var ElementSelector = args.shift();
        BankSystem.give(ElementSelector, client, Librairie);
        break;
      case "me":
        BankSystem.me(client, Librairie);
        break;
      default:
        channel.send({
          embed: {
            title: "Bienvenue dans la AxeBank",
            description: "Vous trouverais tout les commands de la comande",
            thumbnail: {
              url: client.user.displayAvatarURL
            },
            fields: [
              {
                name: "Commands",
                value: "give, me",
                inline: true
              }
            ],
            timestamp: new Date()
          }
        });
        break;
    }
  }
=======
'use strict';

const BankSystem = require('./../lib/BankSystem');  
//const buffer = require('./../Resolver/Buffer');
//const { MessageAttachment } = require('discord.js');
//const file = new MessageAttachment('./asset/images/bank.png', 'bank.png');
const Avatar = require('./../Resolver/avatar');

module.exports = {
    name: 'bank',
    aliases: [],
    description: 'Systeme Bank',
    guildOnly: true,
    cooldown: 1,
    async execute(client, { message, args, guild, member, user, channel, S_Guild, S_User }) {
        var ElementPrimarie = args.shift();
        const Librairie = { message, args, guild, member, user, channel, S_Guild, S_User };
        switch (ElementPrimarie) {
            case 'give':
                var ElementSelector = args.shift();
                BankSystem.give(ElementSelector, client, Librairie);
                break;
            case 'me':
                BankSystem.me(client, Librairie);
                break;
            default:
                channel.send({
                    embed: {
                        title: "Bienvenue dans la SeReNbank",
                        description: 'Vous trouverais tout les commands de la comande',
                        color: client.config.color(),
                        thumbnail: {
                            url: await client.user.displayAvatarURL(),
                        },
                        fields: [
                            {
                                name: 'Commands',
                                value: 'give, me',
                                inline: true,
                            },
                        ],
                        timestamp: new Date(),
                    }
                })
                break;
        }
    }
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
};
