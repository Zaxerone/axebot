import { Command } from "./command";
import { CommandContext } from "./command_context";

export class GreetCommand implements Command {
  commandNames = ["greet", "hello"];

  async run(commandContext: CommandContext): Promise<void> {
    commandContext.message.delete({ timeout: 2000 });
    commandContext.message.reply("bonjour à toi");
  }
}
