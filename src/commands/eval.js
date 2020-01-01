'use strict';

function clean(text) {
    if (typeof text === 'string') {
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    }
    return text
}

module.exports = {
    name: 'eval',
    aliases: ['evaluation', 'code'],
    description: 'execute un code',
    cooldown: 1,
    async execute(client, { message, args, user, channel, guild, member, S_Guild, S_User }) {
        if (user.id !== '363603951163015168') return false;
        const code = args.join(' ');
        if (!code) return false;
        try {   
            const evaled = eval(code);
            const cleanCode = await clean(evaled);
            if (String(cleanCode).includes(process.env.DISCORD_TOKEN)) return false;
            channel.send(cleanCode, { code: 'js' });
        } catch (error) {
            channel.send(error, { code: 'js' });
        };
    }
};
