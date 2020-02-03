<<<<<<< HEAD
"use strict";

module.exports = (ID, avatar) => {
  let format = ".png";
  if (avatar.startsWith("a_")) format = ".gif";
  return `https://cdn.discordapp.com/avatars/${ID}/${avatar}${format}?size=2048`;
=======
'use strict';

module.exports = (ID, avatar) => {
    let format = '.png';
    if (avatar.startsWith('a_')) format = '.gif';
    return `https://cdn.discordapp.com/avatars/${ID}/${avatar}${format}?size=2048`
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
};
