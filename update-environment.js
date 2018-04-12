'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#update_environment
discovery.updateEnvironment({
    environment_id: context.id,
    name: 'my_environment2',
    description: 'My environment2'
}, (error, data) => {
    console.log(JSON.stringify(data, null, 2));
});