<<<<<<< HEAD
"use strict";

function clean(text) {
  if (typeof text === "string") {
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  }
  return text;
}

module.exports = {
  name: "eval",
  aliases: ["evaluation", "code"],
  description: "execute un code",
  cooldown: 10,
  category: "staff",
  async execute(
    client,
    { message, args, user, channel, guild, member, S_Guild, S_User }
  ) {
    if (user.id !== "525729900670222337")
      return false;
    const code = args.join(" ");
    if (!code) return false;
    try {
      const evaled = eval(code);
      if (String(evaled).includes(process.env.DISCORD_TOKEN)) return false;
      const cleanCode = await clean(evaled);
      channel.send(cleanCode, { code: "js" });
    } catch (error) {
      channel.send(error, { code: "js" });
    }
  }
};
=======
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
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
