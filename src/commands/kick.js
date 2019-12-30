'use strict';

module.exports = {
    name: 'kick',
    aliases: ['kick'],
    description: 'expulser un utilisateur',
    cooldown: 3,
    async execute(client, { args, channel, member, message }) {
			if (!member.hasPermission('KICK_MEMBERS')) return false;
			if (!message.guild) return channel.send('Vous ne pouvez pas executer cette commande en MP !');
        var userSearch = args.shift();
        if (!userSearch) userSearch = member;
        else userSearch = client.members.find(user => user.username === userSearch) ||
        client.users.get(userSearch) || message.mentions.members.first() || user;
        if (!userSearch) {
            message.delete({ timeout: 0 });
            throw TypeError(`Je n'arrive pas à trouver l'utilisateur!`);
				};
				let reason = args[1];
				if (!reason) reason = undefined;
				userSearch.kick(reason);
				channel.send(`${userSearch.tag} a bien été expulsé!`)
    },
};