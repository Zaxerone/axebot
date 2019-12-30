'use strict';

const { Collection } = require('discord.js');

module.exports = async (client, message) => {
    if (message.author.bot) return false;
    var userSettings = await client.users.get(message.author);

    if (message.content.indexOf(client.prefix) !== 0) return false;
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return false;
    var cooldowns = client.cooldowns;
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`S'il vous plait attender ${timeLeft.toFixed(1)}  seconde(s) de plus avant de reutiliser la commande \`${command.name}\`.`);
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('Vous ne pouvez pas executer cette commande en DM');
    }

    command.execute(client, {
        message: message,
        args: args,
        guild: message.guild,
        member: message.member,
        user: message.author,
        channel: message.channel,
        S_User: userSettings,
    });
};