const { Command } = require('discord-akairo');
const ms = require('ms');

class KickCommand extends Command {
	constructor() {
		super('kick', {
			args: [
				{
					id: 'member',
					type: 'member'
				},
				{
					id: 'reason',
					match: 'content'
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
		const reason = args.reason.slice(1);
		if (!args.member) return message.reply("Aucun membre n'a été trouvé!");
		await args.member.kick(reason);
		message.delete({ timeout: 3000 });
		return message.channel.send(`${args.member} a été kick!`);
	}
}

module.exports = KickCommand;
