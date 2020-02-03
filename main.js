"use strict";

const { ShardingManager } = require("discord.js");
require("dotenv").config();

const manager = new ShardingManager("./src/index.js", {
  token: process.env.DISCORD_TOKEN,
  shardArgs: ["--ansi", "--color", "--trace-warnings"]
});

manager.spawn();
manager.on("shardCreate", shard => {
  shard.on("launch", shard => console.log(`Launched shard ${shard.id}`));
  shard.on("message", (shard, message) => {
    console.log(`Shard[${shard.id}] : ${message._eval} : ${message._result}`);
  });
  shard.on("death", child => console.log(`Shard[${shard.id}] has been dead !`));
  shard.on("disconnect", () =>
    console.log(`Shard[${shard.id}] has been disconnected !`)
  );
  shard.on("error", console.error);
  shard.on("ready", () => console.log(`Shard[${shard.id}] is ready !`));
  shard.on("reconnecting", () => console.log(`Shard[${shard.id}] reconnects`));
  shard.on("spawn", child => console.log(`Shard[${shard.id}] has spawned`));
});
process.on("warning", console.warn);
process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);
process.on("removeListener", console.log);
<<<<<<< HEAD
process.on("rejectionHandled", console.error);
=======
process.on("rejectionHandled", console.error);
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
