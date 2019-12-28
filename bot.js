const {
	AkairoClient,
	CommandHandler,
	InhibitorHandler,
	ListenerHandler
} = require('discord-akairo');
require('dotenv').config();

class Bot extends AkairoClient {
	constructor() {
		super(
			{
				ownerID: '525729900670222337'
			},
			{
				disableEveryone: true
			}
		);

		this.commandHandler = new CommandHandler(this, {
			directory: './commands/',
			prefix: 'a/',
			allowMention: true,
			commandUtil: true
		});
		this.inhibitorHandler = new InhibitorHandler(this, {
			directory: './inhibitors/'
		});
		this.listenerHandler = new ListenerHandler(this, {
			directory: './events/'
		});

		this.commandHandler.loadAll();
		this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
		this.inhibitorHandler.loadAll();
		this.commandHandler.useListenerHandler(this.listenerHandler);
		this.listenerHandler.loadAll();
	}
}

const client = new Bot();
client.login(process.env.TOKEN);
client.on('error', console.error);
client.on('warn', console.warn);
