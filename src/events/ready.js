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
