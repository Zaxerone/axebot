<<<<<<< HEAD
"use strict";

const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("./../../botconfig");

const guildShema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  prefix: {
    type: String,
    default: defaults.prefix
  },
  welcomeChannel: {
    type: String,
    default: defaults.welcomeChannel
  },
  welcomeMessage: {
    type: String,
    default: defaults.welcomeMessage
  },
  logsChannel: {
    type: String,
    default: defaults.logsChannel
  }
});

module.exports = mongoose.model("Guild", guildShema);
=======
'use strict';

const mongoose = require('mongoose');
const { DEFAULTSETTINGS: defaults } = require('./../../config');

const guildShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    prefix: {
        "type": String,
        "default": defaults.prefix,
    },
    welcomeChannel: {
        "type": String,
        "default": defaults.welcomeChannel,
    },
    welcomeMessage: {
        "type": String,
        "default": defaults.welcomeMessage,
    },
});

module.exports = mongoose.model('Guild', guildShema);
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
