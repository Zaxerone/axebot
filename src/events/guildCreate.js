"use strict";

module.exports = async (client, guild) => {
  const newGuild = {
    guildID: guild.id,
    guildName: guild.name
  };

  await client.createGuild(newGuild);
  
  await client.user.setActivity(`${guild.name} a ajouté le bot!`, { type: "WATCHING" });

  const support = client.guilds.get("654435341385728022");
  const channel = support.channels.find(ch => ch.name == "guild-logs");
  channel.send({
    embed: {
      title: "Nouveau serveur!",
      color: 0x2ecc71,
      description: `:tada: Un nouveau serveur vient d'ajouter le bot!\n\n**Nom/ID**: ${guild.name} (${guild.id})\n**Créateur/ID**: ${guild.owner} (${guild.owner.id})`,
      timestamp: new Date(),
      footer: {
        text: client.user.tag,
        icon_url: client.botAvatar
      }
    }
  });
  setTimeout(() => {
    client.user.setActivity(require("../../botconfig").ACTIVITY, { type: "WATCHING"}); 
  }, 7 * 1000)
};
};

