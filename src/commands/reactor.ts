import { Message } from "discord.js";
import { config } from "../config/config";

const SUC_REACTION = ["✅", "⭐"];
const FAIL_REACTION = ["❌", "❗"];

export class Reactor {
  enableReactions: boolean;
  constructor(enableReactions: boolean) {
    this.enableReactions = enableReactions;
  }

  success(message: Message) {
    if (!this.enableReactions) return;
    return message.react(this.getRandom(SUC_REACTION));
  }

  failure(message: Message) {
    if (!this.enableReactions) return;
    return message.react(this.getRandom(FAIL_REACTION));
  }

  private getRandom(array: string[]) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

export let reactor = new Reactor(config.enableReactions);
