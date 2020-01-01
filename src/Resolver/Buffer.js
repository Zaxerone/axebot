'use strict';

const axios = require('axios');

module.exports = function buffer(data) {
    return axios.get(data, {
            responseType: 'arraybuffer'
        })
        .then((res) => res.data)
        .catch(err => console.log(err));
};
