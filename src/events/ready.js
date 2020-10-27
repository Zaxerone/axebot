"use strict";

const logger = require("./../lib/logger");
const moment = require("moment");
moment.locale("fr");

module.exports = async (client) => {
  client.maintenance = false;
  client.botAvatar = client.user.avatarURL({ format: "png", size: 2048 });

  client.user.setStatus("idle");
  if (client.maintenance == true) {
    client.user.setActivity("Bot en maintenance");
  } else {
    client.user.setActivity(require("../../botconfig").ACTIVITY, {
      type: "WATCHING",
    });
  }

  client.appInfo = await client.fetchApplication();
  setTimeout(() => {
    client.appInfo = client.fetchApplication();
  }, 3600000);

  logger.log(`${client.user.tag} is connected !`);
  // await client.channels
  //   .get("668080342447423519")
  //   .send(
  //     `${moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")} - Bot démarré !`,
  //     { code: "c" }
  //   );
};
