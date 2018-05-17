'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

//const query = 'metadata.sourceUrl::"file:///Users/ippei/IdeaProjects/discovery-hack/crawl-target/050926-16.json"';
const query = 'id:"8bcbe934-dcf3-4331-9ffc-5ddc050c882e"';

//const query = 'アジャイル開発宣言';
//const query = '{extracted_metadata.filename: "agile.json"}';

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#query-collection
discovery.query({
    environment_id: context.id,
    collection_id: context.collection_id,
    query: query
}, (error, data) => {
    if (error) {
        console.log('error:', error);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});
