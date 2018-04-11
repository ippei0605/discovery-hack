'use strict';

// モジュールを読込む。
const discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#list_environments
discovery.listEnvironments({}, function (error, data) {
    console.log(JSON.stringify(data, null, 2));
});