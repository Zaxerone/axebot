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