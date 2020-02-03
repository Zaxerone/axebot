"use strict";

const { Client, Collection } = require("discord.js");
const client = new Client({
  disableEveryone: true,
  fetchAllMembers: true,
  restTimeOffset: 1000,
  restRequestTimeout: 25000,
  retryLimit: 2
});
<<<<<<< HEAD
const { readdirSync, readdir } = require("fs");
const { sep } = require("path");

client.mongoose = require("./lib/mongoose");
require("./lib/functions")(client);
client.config = require("../botconfig");
=======
const fs = require("fs");

client.mongoose = require("./lib/mongoose");
require("./lib/functions")(client);
client.config = require("./../config");
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
client.function = require("./Resolver");
client.cooldowns = new Collection();
client.commands = new Collection();
client.connection = false;
<<<<<<< HEAD


readdir("./src/events/", (err, files) => {
=======

fs.readdir("./src/events/", (err, files) => {
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
  if (err) return console.error;
  files.forEach(file => {
    const event = require(`./events/${file}`);
    const eventName = file.split(".")[0];
<<<<<<< HEAD
    console.log(`Event ${eventName} loaded`);
=======
    console.log(`Event ${eventName} chargée`);
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
    client.on(eventName, event.bind(null, client));
  });
});

<<<<<<< HEAD
const commandFiles = 
   readdirSync("./src/commands")
=======
const commandFiles = fs
  .readdirSync("./src/commands")
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.mongoose.init();
client.login();
client.on("error", console.error);
<<<<<<< HEAD
client.on("warn", console.warn);
=======
client.on("warn", console.warn);
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
