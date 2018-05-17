'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/node.html?node#get-document-status
discovery.getDocumentStatus({
    environment_id: context.id,
    collection_id: context.collection_id,
    document_id: 'fcbe5190-ac3c-4a4d-abde-7511bcfe6c91'
}, (error, data) => {
    if (error) {
        console.log('error:', error);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});