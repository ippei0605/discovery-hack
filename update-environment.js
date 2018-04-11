'use strict';

// モジュールを読込む。
const discovery = require('./discovery');

const id = '246b8ace-54d2-4e32-9172-f0dc8946d15e';

// https://www.ibm.com/watson/developercloud/discovery/api/v1/?node#update_environment
discovery.updateEnvironment({
    environment_id: id,
    name: 'my_environment2',
    description: 'My environment2'
}, (error, data) => {
    console.log(JSON.stringify(data, null, 2));
});