<<<<<<< HEAD
"use strict";

module.exports = async (content, data) => {
  if (typeof data !== "object") throw Error("Data is not an Object");
  var ResolvedMsg = content;
  for (const key in data) {
    if (Array.isArray(data[key])) {
      let i = 0;
      let lastReplace = `{{${key}}}`;
      while (ResolvedMsg.includes(lastReplace)) {
        ResolvedMsg = ResolvedMsg.replace(lastReplace, data[key][i]);
        i++;
      }
    } else {
      let lastReplace = `{{${key}}}`;
      while (ResolvedMsg.includes(lastReplace)) {
        ResolvedMsg = ResolvedMsg.replace(lastReplace, data[key]);
      }
    }
  }
  return await ResolvedMsg;
};
=======
'use strict';

module.exports = async (content, data) => {
    if (typeof data !== 'object') throw Error('Data is not an Object');
    var ResolvedMsg = content;
    for (const key in data) {
        if (Array.isArray(data[key])) {
            let i = 0;
            let lastReplace = `{{${key}}}`;
            while (ResolvedMsg.includes(lastReplace)) {
                ResolvedMsg = ResolvedMsg.replace(lastReplace, data[key][i]);
                i++;
            }
        } else {
            let lastReplace = `{{${key}}}`;
            while (ResolvedMsg.includes(lastReplace)) {
                ResolvedMsg = ResolvedMsg.replace(lastReplace, data[key]);
            };
        }
    }
    return await ResolvedMsg;
};
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
