'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

const nl = '木鶏たりえず';

// https://www.ibm.com/watson/developercloud/discovery/api/v1/node.html?node#query
discovery.query({
    environment_id: context.id,
    collection_id: context.collection_id,
    natural_language_query: nl,
    count: 3,
    passages: true
}, (error, data) => {
    if (error) {
        console.log('error:', error);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});
