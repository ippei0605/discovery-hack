'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#query-collection
discovery.query({
    environment_id: context.id,
    collection_id: context.collection_id,
    query: '猫の妙術を読みたい'
}, (error, data) => {
    if (error) {
        console.log('error:', error);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});
