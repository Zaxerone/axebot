const { Command } = require('discord-akairo');
const ms = require('ms');

class BanCommand extends Command {
	constructor() {
		super('ban', {
			args: [
				{
					id: 'member',
					type: 'member'
				},
				{
					id: 'time'
				},
				{
					id: 'reason',
					match: 'content'
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
		const reason = args.reason.slice(2);
		if (!args.member) return message.reply("Aucun membre n'a été trouvé!");
		await args.member.ban(reason);
		message.delete({ timeout: 3000 });
		message.channel.send(`${args.member} a été banni!`);

		setTimeout(async () => {
			await args.member.unban();
		}, ms(args.time));
		return;
	}
}

module.exports = BanCommand;
