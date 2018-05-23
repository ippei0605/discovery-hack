/**
 * @file Discovery Hack
 * @author Ippei SUZUKI
 */

'use strict';

// モジュールを読込む。
const
    cfenv = require('cfenv'),
    express = require('express'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    AWS = require('ibm-cos-sdk');

// アプリケーションを作成する。
const
    app = express(),
    appEnv = cfenv.getAppEnv();

const creds = appEnv.getServiceCreds('cos-ippei');
creds.region = 'us-geo';

const cos = new AWS.S3(creds);

console.log('###', creds);

// ミドルウェアを設定する。
app.use(morgan('combined'));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', (req, res) => {
    cos.getObject({
        Bucket: 'docs-ippei',
        Key: 'neko.pdf'
    }, (error, value) => {
        if (error) {
            console.log('error', error);
            res.sendStatus(500);
        } else {
            res.send(value.Body);
        }
    });
});

// リクエトを受付ける。
app.listen(appEnv.port, () => {
    console.log("server starting on " + appEnv.url);
});