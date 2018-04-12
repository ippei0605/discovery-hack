'use strict';

// モジュールを読込む。
const
    DiscoveryV1 = require('watson-developer-cloud/discovery/v1'),
    context = require('./context');

const discovery = new DiscoveryV1({
    username: context.creds.username,
    password: context.creds.password,
    version_date: '2017-11-07'
});

module.exports = discovery;