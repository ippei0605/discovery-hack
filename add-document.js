'use strict';

// モジュールを読込む。
const
    fs = require('fs'),
    context = require('./context'),
    discovery = require('./discovery');

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#add-doc
fs.readFile('./data/メッセージ.txt', (error, file) => {
    if (error) {
        console.log('error:', error);
    } else {
        discovery.addDocument({
            environment_id: context.id,
            collection_id: context.collection_id,
            file: file
        }, (error, data) => {
            if (error) {
                console.log('error:', error);
            } else {
                console.log(JSON.stringify(data, null, 2));
            }
        });
    }
});
