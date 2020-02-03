<<<<<<< HEAD
"use strict";

module.exports = {
  name: "clear",
  description: "Supprime les messages",
  aliases: ["purge"],
  cooldown: 5,
  category: "moderation",
  execute(client, { args, guild, member, channel, message }) {
    if (!member.hasPermission("MANAGE_MESSAGES"))
      return channel.send("Vous n'avez pas la permission à cette commande!");
    if (!message.guild)
      return channel.send("Vous ne pouvez pas executer cette commande en MP !");
    if (!guild.me.hasPermission("MANAGE_MESSAGES"))
      return channel.send(
        "Je n'ai pas la permission de supprimer les messages!"
      );
     if (Number(args[0]) > 100 || Number(args[0]) < 2)
     return channel.send("Veuillez définir un nombre entre 2 et 100 !")
    channel.bulkDelete(Number(args[0]) + 1, true).then(msg => {
      message.reply(`J'ai supprimé ${msg.size - 1} message(s).`).then(mess => {
        mess.delete({ timeout: 3000 });
      });
    });
  }
};
=======
'use strict';

module.exports = {
    name: 'clear',
    description: 'Supprime les messages',
    aliases: ['purge'],
    cooldown: 5,
    execute(client, { args, channel, message }) {
        channel.bulkDelete(args[0] + 1, true).then(msg => {
            message.reply(`J'ai supprimé ${msg.size} message(s).`).then(mess => {
                mess.delete({ timeout: 3000 });
            });
        });
    },
};
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
