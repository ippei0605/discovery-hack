'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#delete_environment
discovery.deleteEnvironment({
    environment_id: context.id
}, (error, data) => {
    console.log(JSON.stringify(data, null, 2));
});