'use strict';

module.exports = {
    name: 'ping',
    aliases: ['ping'],
    description: 'donne la latence du bot',
    cooldown: 3,
    async execute(client, { channel, message }) {
			let m = await channel.send("Pong!");
			let compare = (m.createdAt || m.editedAt) - (message.createdAt || message.editedAt);
			m.edit(
				"Pong!",
				`Latence Client: ${compare} ms`,
				`Latence API: ${Math.round(client.ping)}`
			)
    },
};