const { Command } = require('discord-akairo');

class ReloadCommand extends Command {
	constructor() {
		super('reload', {
			aliases: ['reload'],
			category: 'owner',
			ownerOnly: true,
			args: [
				{
					id: 'commandName'
				}
			]
		});
	}

	async exec(message, args) {
		if (!args.commandName)
			return message.reply('Je ne trouve pas la commande!');
		this.handler.reload(args.commandName);
		return message.channel.send(`Commande ${args.commandName} rechargée!`);
	}
}

module.exports = ReloadCommand;
