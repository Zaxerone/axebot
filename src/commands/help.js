'use strict';

module.exports = {
    name: 'help',
    aliases: ['aide', 'h'],
    description: 'Affiche toutes les commandes du bot !',
    cooldown: 5,
    execute(client, { channel }) {
        var commands = client.commands
        return channel.send({
            embed: {
                title: 'Commande help !',
                color: client.config.color(),
                thumbnail: {
                    url: client.user.displayAvatarURL(),
                },
                fields: [
                    {
                        name: 'Commands',
                        value: client.commands.map(c => c.name).join(', '),
                    },
                ],
                timestamp: new Date(),
            },
        });
    }
}