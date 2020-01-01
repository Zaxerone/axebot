"use strict";

const { Client, Collection } = require("discord.js");
const client = new Client({
  disableEveryone: true,
  fetchAllMembers: true,
  restTimeOffset: 1000,
  restRequestTimeout: 25000,
  retryLimit: 2
});
const fs = require("fs");

client.mongoose = require("./lib/mongoose");
require("./lib/functions")(client);
client.config = require("./../config");
client.function = require("./Resolver");
client.cooldowns = new Collection();
client.commands = new Collection();
client.connection = false;

fs.readdir("./src/events/", (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    const event = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    console.log(`Event ${eventName} chargée`);
    client.on(eventName, event.bind(null, client));
  });
});

const commandFiles = fs
  .readdirSync("./src/commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.mongoose.init();
client.login();
client.on("error", console.error);
client.on("warn", console.warn);
