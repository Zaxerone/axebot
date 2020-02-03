<<<<<<< HEAD
"use strict";

const logger = require("./../lib/logger");
const moment = require("moment");
moment.locale('fr');

module.exports = async client => {
    client.maintenance = false;
    client.botAvatar = client.user.avatarURL({ format: "png", size: 2048 });

  client.user.setStatus('idle');
    if(client.maintenance == true) {
    client.user.setActivity("Bot en maintenance")
    } else {
    client.user.setActivity(require("../../botconfig").ACTIVITY, { type: "WATCHING"}); 
    }
 
  client.appInfo = await client.fetchApplication();
  setTimeout(() => {
    client.appInfo = client.fetchApplication();
  }, 3600000);
  
  
  logger.log(`${client.user.tag} is connected !`);
  await client.channels.get("668080342447423519").send(`${moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')} - Bot démarré !`, {code: "c"});
};
=======
'use strict'

const logger = require('./../lib/logger');

module.exports = async client => {
    client.user.setPresence({ activity: { name: 'Anikami' }, status: 'idle' });
    client.appInfo = await client.fetchApplication();
    setTimeout(() => {
        client.appInfo = client.fetchApplication();
    }, 3600000);
    logger.log(`${client.user.tag} est connecté !`);
};
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
