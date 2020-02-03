<<<<<<< HEAD
"use strict";

const axios = require("axios");

module.exports = function buffer(data) {
  return axios
    .get(data, {
      responseType: "arraybuffer"
    })
    .then(res => res.data)
    .catch(err => console.log(err));
=======
'use strict';

const axios = require('axios');

module.exports = function buffer(data) {
    return axios.get(data, {
            responseType: 'arraybuffer'
        })
        .then((res) => res.data)
        .catch(err => console.log(err));
>>>>>>> 4c25e874e06ecebb7c351ea42ff6f8a205d2e1b1
};
