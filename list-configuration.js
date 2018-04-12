'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#list_configurations
// WARNING: getConfigurations() was renamed to listConfigurations(). Support for getConfigurations() will be removed in the next major release
discovery.listConfigurations({
    environment_id: context.id
}, (error, data) => {
    console.log(JSON.stringify(data, null, 2));
});