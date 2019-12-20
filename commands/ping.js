const { Command } = require('discord-akairo');

class PingCommand extends Command {
	constructor() {
		super('ping', {
			aliases: ['ping'],
			category: 'user',
			cooldown: 10000,
			ratelimit: 2
		});
	}

	async exec(message) {
		const sent = await message.util.reply('Pong!');
		const timeDiff =
			(sent.editedAt || sent.createdAt) -
			(message.editedAt || message.createdAt);
		return message.util.reply([
			'Pong!',
			`**Latence Client**: ${timeDiff} ms`,
			`**Latence API**: ${Math.round(this.client.ws.ping)} ms`
		]);
	}
}

module.exports = PingCommand;
