'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#list_environments
// WARNING: getEnvironments() was renamed to listEnvironments(). Support for getEnvironments() will be removed in the next major release
discovery.listEnvironments({}, (error, data) => {
    console.log(JSON.stringify(data, null, 2));
});