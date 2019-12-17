import { Message, Client } from "discord.js";
import { config, BotConfig } from "./config/config";
import { CommandHandler } from "./command_handler";

validateConfig(config);

const commandHandler = new CommandHandler(config.prefix);
const client = new Client();

client.on("ready", () => console.log("Le bot a démarré !"));
client.on("error", e => console.error("Discord error!", e));
client.on("message", (message: Message) =>
  commandHandler.handleMessage(message)
);
client.login(config.token);

function validateConfig(config: BotConfig) {
  if (!config.token)
    throw new Error("Impossible de trouver le token, veuillez le spécifier");
}
