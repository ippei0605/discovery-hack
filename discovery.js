'use strict';

// モジュールを読込む。
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

const creds = {
    "url": "https://gateway.watsonplatform.net/discovery/api",
    "username": "50b883ed-042d-407b-8c31-1094c7a9b4e6",
    "password": "cyJXY0k4XY2e"
};

const discovery = new DiscoveryV1({
    username: creds.username,
    password: creds.password,
    version_date: '2017-11-07'
});

module.exports = discovery;