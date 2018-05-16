'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

const nl = '鬼瓦少佐の記事を読みたい';

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#query-collection
discovery.query({
    environment_id: context.id,
    collection_id: context.collection_id,
    natural_language_query: nl,
    count: 5
}, (error, data) => {
    if (error) {
        console.log('error:', error);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});
