'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#delete-doc
discovery.deleteDocument({
    environment_id: context.id,
    collection_id: context.collection_id,
    document_id: '29f2371dad30835b344a6ca05b473eae'
}, (error, data) => {
    if (error) {
        console.log('error:', error);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});
