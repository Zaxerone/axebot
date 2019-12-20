const { Command } = require('discord-akairo');

class KickCommand extends Command {
	constructor() {
		super('kick', {
			args: [
				{
					id: 'member',
					type: 'member'
				}
			],
			clientPermissions: ['KICK_MEMBERS'],
			userPermissions: ['KICK_MEMBERS'],
			channel: 'guild',
			aliases: ['kick'],
			category: 'user'
		});
	}

	async exec(message, args) {
		message.delete({ timeout: 3000 });
		if (!args.member) return message.reply("Aucun membre n'a été trouvé!");
		await args.member.kick();
		return message.channel.send(`${args.member} a été kick!`);
	}
}

module.exports = KickCommand;
