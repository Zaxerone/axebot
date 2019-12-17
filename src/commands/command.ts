import { CommandContext } from "./command_context";

export interface Command {
  readonly commandNames: string[];
  run(parseUserCommand: CommandContext): Promise<void>;
}