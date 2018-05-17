'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/node.html?node#create-environment
discovery.createEnvironment({
    name: 'my_environment',
    description: 'My environment',
    size: 1
}, (error, data) => {
    console.log(JSON.stringify(data, null, 2));
});