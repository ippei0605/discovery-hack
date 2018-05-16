'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#create-collection
// params collection_name は誤植、name が正解っぽい。。。
discovery.createCollection({
    environment_id: context.id,
    name: 'Box',
    description: 'Boxテスト用コレクション',
    configuration_id: context.configuration_id,
    language: 'ja'
}, (error, data) => {
    if (error) {
        console.log('error:', error);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});
