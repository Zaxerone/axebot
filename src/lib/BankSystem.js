<<<<<<< HEAD
"use strict";

module.exports = {
  give: async (
    ElementSelector,
    client,
    { guild, message, args, channel, S_Guild, S_User, user }
  ) => {
    switch (ElementSelector) {
      case "money":
        if (!args.join(" "))
          return channel.send(
            `${S_Guild.prefix}bank give money [user] [money] (--privateMessageOnly=BOOLEAN || --silence=BOOLEAN)`
          );
        var ElementUser = args.shift();
        if (!ElementUser)
          return channel.send("Vous devez definir un utilisateur !");
        var UserFound = guild.member(
          message.mentions.users.first() ||
            client.users.find(user => user.username === ElementUser) ||
            client.users.get(ElementUser)
        );
        if (!UserFound)
          return channel.send(
            "Je ne trouve pas l'utilisateur dans le serveur !"
          );
        var ElementCountMoney = Number(args.shift());
        if (!ElementCountMoney)
          return channel.send(
            `Vous devez définir un montant à envoyer à ${UserFound.username}`
          );
        if (isNaN(ElementCountMoney))
          return channel.send("vous devez definir un nombre");
        if (ElementCountMoney < 0)
          return channel.send(`Vous ne pouvez prendre de l'argent`);
        var AccountGiver = Number(S_User.money);
        if (ElementCountMoney > AccountGiver)
          return channel.send(`Transfere refuser: \`Manque de AxeMoney\``);
        var User_Account = await client.getUser(UserFound);
        var AccountReceived = Number(User_Account.money);
        await client.updateUser(
          user,
          Object.assign({
            money: Number(Number(AccountGiver) - Number(ElementCountMoney))
          })
        ); // Account give
        await client.updateUser(
          UserFound,
          Object.assign({
            money: Number(Number(AccountReceived) + Number(ElementCountMoney))
          })
        ); // Account receive
        var opt = args.join(" ").split(/ +/g);
        var privateMessageOnly;
        var silence;
        var globalA = [];
        for (const key in opt) {
          globalA.push(opt[key]);
        }
        globalA.forEach(item => {
          var splited = item.slice(2).split(/=+/g);
          if (!splited[1]) return false;
          splited[1] = splited[1]
            .toLowerCase()
            .replace(/yes/gi, "true")
            .replace(/oui/gi, "true")
            .replace(/o/gi, "true")
            .replace(/y/gi, "true");
          splited[1] = splited[1]
            .replace(/no/gi, "true")
            .replace(/non/gi, "true")
            .replace(/n/, "true");
          if (splited[0] === "privateMessageOnly")
            privateMessageOnly = splited[1];
          if (splited[0] === "silence") silence = splited[1];
        });
        if (privateMessageOnly === "true") {
          return UserFound.send(
            `${user.tag} Vous à donnez ${ElementCountMoney} AxeMoney !`
          );
        }
        if (silence === "true") {
          message.react("👌");
          message.delete({ timeout: 3000 });
          return false;
        }
        channel.send(
          `${user} à donné ${ElementCountMoney} AxeMoney à ${UserFound}`
        );
        break;

      default:
        channel.send(`Voici la liste des commandes pour give\r\n> money`);
        break;
    }
  },

  me: async (
    client,
    { guild, message, args, channel, S_Guild, S_User, user }
  ) => {
    var EmbedSend = {
      embed: {
        title: "Bienvenue dans la AxeBank",
        description: "Vous trouverais tout les commands de la comande",
        thumbnail: {
          url: client.user.displayAvatarURL
        },
        fields: [
          {
            name: "AxeMoney",
            value: S_User.money,
            inline: true
          },
          {
            name: "Boost",
            value: String(Number(S_User.rep / 1000)),
            inline: true
          }
        ],
        timestamp: new Date()
      }
    };
    var opt = args.join(" ").split(/ +/g);
    var sendGuild;
    var globalA = [];
    for (const key in opt) {
      globalA.push(opt[key]);
    }
    globalA.forEach(item => {
      var splited = item.slice(2).split(/=+/g);
      if (!splited[1]) return false;
      splited[1] = splited[1]
        .toLowerCase()
        .replace(/yes/gi, "true")
        .replace(/oui/gi, "true")
        .replace(/o/gi, "true")
        .replace(/y/gi, "true");
      splited[1] = splited[1]
        .replace(/no/gi, "true")
        .replace(/non/gi, "true")
        .replace(/n/, "true");
      if (splited[0] === "sendGuild") sendGuild = splited[1];
    });
    if (sendGuild === "true") {
      return channel.send(EmbedSend);
    } else {
      user.send(EmbedSend);
    }
    message.react("👌");
  }
=======
'use strict';

module.exports = {
    give: async (ElementSelector, client, { guild, message, args, channel, S_Guild, S_User, user }) => {
        switch (ElementSelector) {
            case 'money':
                if (!args.join(' ')) return channel.send(`${S_Guild.prefix}bank give money [user] [money] (--privateMessageOnly=BOOLEAN || --silence=BOOLEAN)`);
                var ElementUser = args.shift();
                if (!ElementUser) return channel.send('Vous devez definir un utilisateur !');
                var UserFound = guild.member(message.mentions.users.first() || client.users.find(user => user.username === ElementUser) || client.users.get(ElementUser));
                if (!UserFound) return channel.send("Je ne trouve pas l'utilisateur dans le serveur !");
                var ElementCountMoney = Number(args.shift());
                if (!ElementCountMoney) return channel.send(`Vous devez définir un montant à envoyer à ${UserFound.username}`);
                if (isNaN(ElementCountMoney)) return channel.send('vous devez definir un nombre');
                if (ElementCountMoney < 0) return channel.send(`Vous ne pouvez prendre de l'argent`);
                var AccountGiver = Number(S_User.serenity);
                if (ElementCountMoney > AccountGiver) return channel.send(`Transfere refuser: \`Manque de Serenity\``);
                var User_Account = await client.getUser(UserFound);
                var AccountReceived = Number(User_Account.serenity);
                await client.updateUser(user, Object.assign({ serenity: Number(Number(AccountGiver) - Number(ElementCountMoney)) })); // Account give
                await client.updateUser(UserFound, Object.assign({ serenity: Number(Number(AccountReceived) + Number(ElementCountMoney)) })); // Account receive
                var opt = args.join(' ').split(/ +/g);
                var privateMessageOnly;
                var silence;
                var globalA = [];
                for (const key in opt) {
                    globalA.push(opt[key]);
                };
                globalA.forEach(item => {
                    var splited = item.slice(2).split(/=+/g);
                    if (!splited[1]) return false;
                    splited[1] = splited[1].toLowerCase().replace(/yes/gi, 'true').replace(/oui/gi, 'true').replace(/o/gi, 'true').replace(/y/gi, 'true');
                    splited[1] = splited[1].replace(/no/gi, 'true').replace(/non/gi, 'true').replace(/n/, 'true');
                    if (splited[0] === 'privateMessageOnly') privateMessageOnly = splited[1];
                    if (splited[0] === 'silence') silence = splited[1];
                });
                if (privateMessageOnly === 'true') {
                    return UserFound.send(`${user.tag} Vous à donnez ${ElementCountMoney} Serenity !`);
                };
                if (silence === 'true') {
                    message.react('👌');
                    message.delete({ timeout: 3000 });
                    return false;
                }
                channel.send(`${user} à donné ${ElementCountMoney} Serenity à ${UserFound}`);
                break;

            default:
                channel.send(`Voici la liste des commandes pour give\r\n> money`);
                break;
        }
    },

    me: async (client, { guild, message, args, channel, S_Guild, S_User, user }) => {
        var EmbedSend = {
            embed: {
                title: "Bienvenue dans la SeReNbank",
                description: 'Vous trouverais tout les commands de la comande',
                color: client.config.color(),
                thumbnail: {
                    url: await client.user.displayAvatarURL(),
                },
                fields: [
                    {
                        name: 'Serinty',
                        value: S_User.serenity,
                        inline: true,
                    },
                    {
                        name: 'Boost',
                        value: String(Number(S_User.rep / 1000)),
                        inline: true
                    }
                ],
                timestamp: new Date(),
            }
        };
        var opt = args.join(' ').split(/ +/g);
        var sendGuild;
        var globalA = [];
        for (const key in opt) {
            globalA.push(opt[key]);
        };
        globalA.forEach(item => {
            var splited = item.slice(2).split(/=+/g);
            if (!splited[1]) return false;
            splited[1] = splited[1].toLowerCase().replace(/yes/gi, 'true').replace(/oui/gi, 'true').replace(/o/gi, 'true').replace(/y/gi, 'true');
            splited[1] = splited[1].replace(/no/gi, 'true').replace(/non/gi, 'true').replace(/n/, 'true');
            if (splited[0] === 'sendGuild') sendGuild = splited[1];
        });
        if (sendGuild === 'true') {
            return channel.send(EmbedSend);
        } else {
            user.send(EmbedSend);
        };
    },
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
};
