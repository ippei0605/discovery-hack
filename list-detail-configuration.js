'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#get_configurations
discovery.getConfiguration({
    environment_id: context.id,
    configuration_id: context.configuration_id
}, (error, data) => {
    console.log(JSON.stringify(data, null, 2));
});