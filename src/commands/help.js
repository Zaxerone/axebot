"use strict";
const { readdirSync } = require("fs");

module.exports = {
  name: "help",
  aliases: ["aide", "h"],
  description: "Affiche toutes les commandes du bot !",
  cooldown: 5,
  category: "utile",
  execute(client, { message, member, args, channel, S_Guild }) {
    var embed = {
      title: "Commande help !",
      description: "",
      color: 0x3498db,
      thumbnail: {
        url: member.displayAvatarURL
      },
      image: {
        url: client.botAvatar
      },
      fields: [],
      timestamp: new Date(),
      footer: {
        text: client.user.tag,
        icon_url: client.botAvatar
      }
    };

    if (args[0]) {
      var command = args.shift();
      var cmd;
      if (client.commands.has(command)) cmd = client.commands.get(command);

      if (!cmd)
        return channel.send(
          (embed.title = "Commande Invalide"),
          (embed.description = `Fait \`${S_Guild.prefix}help\` pour voir la liste des commandes`)
        );

      command = cmd;
      embed.title = `${command.name.slice(0, 1).toUpperCase() +
        command.name.slice(1)} command help`;
      embed.description = [
        `❯ **Commande:** ${command.name.slice(0, 1).toUpperCase() +
          command.name.slice(1)}`,
        `❯ **Description:** ${command.description || "Aucune description."}`,
        `❯ **Aliasses:** ${
          command.aliases ? command.aliases.join(", ") : "Aucun alias."
        }`,
        `❯ **Catégory:** ${
          command.category ? command.category : "General" || "Misc"
        }`
      ].join("\n");

      return channel.send({ embed: embed });
    } 
      AddFields(client, embed);
      channel.send({ embed: embed });
  }
};

function getCategory(client, name) {
    if (typeof name !== "string") return TypeError("Le nom doit être de type `string`")
   return client.commands.filter(cmd => cmd.category == name).map(cmd => `\`${cmd.name}\``).join(', ');
}

function AddFields(client, object) {
    var result;
    
   object.fields = [
        {
          name: "Fun",
          value: getCategory(client, "fun")
        },
        {
          name: "Modération",
          value: getCategory(client, "moderation")
        },
        {
          name: "Economie",
          value: getCategory(client, "economie")
        },
        {
          name: "Utilitaires",
          value: getCategory(client, "utile")
        },
        {
          name: "Comptes",
          value: getCategory(client, "compte")
        },
        {
          name: "Configuration",
          value: getCategory(client, "config")
        }
    ]
    
   result = object;    
   return result;
}