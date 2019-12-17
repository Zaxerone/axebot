import { Message } from "discord.js";
import { Command } from "./commands/command";
import { CommandContext } from "./commands/command_context";
import { GreetCommand } from "./commands/greet";
import { reactor } from "./commands/reactor";

export class CommandHandler {
  private commands: Command[];
  private readonly prefix: string;

  constructor(prefix: string) {
    const commandClasses = [GreetCommand];

    this.commands = commandClasses.map(commandClass => new commandClass());
    this.prefix = prefix;
  }

  async handleMessage(message: Message): Promise<void> {
    if (message.author.bot || !this.isCommand(message)) return undefined;
    const commandContext = new CommandContext(message, this.prefix);

    const matchedCommands = this.commands.find(command =>
      command.commandNames.includes(commandContext.command)
    );

    if (!matchedCommands) {
      await message.reply(
        `Je ne reconnais pas cette commande. Essayez ${this.prefix}help.`
      );
    } else {
      await matchedCommands
        .run(commandContext)
        .then(() => {
          reactor.success(message);
        })
        .catch(r => {
          console.log(r);
          reactor.failure(message);
        });
    }
  }

  private isCommand(message: Message): boolean {
    return message.content.startsWith(this.prefix);
  }
}
