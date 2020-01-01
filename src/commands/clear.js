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
