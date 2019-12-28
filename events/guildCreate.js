const { Listener } = require('discord-akairo');

class GuildCreateListener extends Listener {
	constructor() {
		super('guildCreate', {
			emitter: 'client',
			event: 'guildCreate'
		});
	}

	async exec(guild) {
		guild.owner.send(
			"**Bonjour, merci d'avoir ajouté notre bot sur votre serveur**\n> Pour plus d'informations, écrivez a/help"
		);
	}
}

module.exports = GuildCreateListener;
