'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#list-collections
// WARNING: getCollections() was renamed to listCollections(). Support for getCollections() will be removed in the next major release
discovery.listCollections({
    environment_id: context.id,
}, (error, data) => {
    if (error) {
        console.log('error:', error);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});
