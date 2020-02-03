<<<<<<< HEAD
"use strict";

const mongoose = require("mongoose");

const userShema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userID: String,
  userName: String,
  rep: Number,
  money: Number,
  guildData: Array
});

module.exports = mongoose.model("User", userShema);
=======
'use strict';

const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    userName: String,
    rep: Number,
    serenity: Number,
    guildData: Array
});

module.exports = mongoose.model('User', userShema);
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
