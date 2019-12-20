const { Command } = require('discord-akairo');

class BanCommand extends Command {
	constructor() {
		super('ban', {
			args: [
				{
					id: 'member',
					type: 'member'
				}
			],
			clientPermissions: ['BAN_MEMBERS'],
			userPermissions: ['BAN_MEMBERS'],
			channel: 'guild',
			aliases: ['ban'],
			category: 'user'
		});
	}

	async exec(message, args) {
		message.delete({ timeout: 3000 });
		if (!args.member) return message.reply("Aucun membre n'a été trouvé!");
		await args.member.ban();
		return message.channel.send(`${args.member} a été banni!`);
	}
}

module.exports = BanCommand;
