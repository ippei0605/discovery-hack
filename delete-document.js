'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#delete-doc
discovery.deleteDocument({
    environment_id: context.id,
    collection_id: context.collection_id,
    document_id: '7d807632-072f-40bb-bed4-edf749cc52eb'
}, (error, data) => {
    if (error) {
        console.log('error:', error);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});
