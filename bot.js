const {
	AkairoClient,
	CommandHandler,
	InhibitorHandler
} = require('discord-akairo');
require('dotenv').config();

class MyClient extends AkairoClient {
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

		this.commandHandler.loadAll();
		this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
		this.inhibitorHandler.loadAll();
	}
}

const client = new MyClient();
client.login(process.env.TOKEN).then(console.log('Bot prêt!'));
