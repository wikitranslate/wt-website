'use strict';

let koa = require('koa');
let koaMount = require('koa-mount');
let koaStatic = require('koa-static');
let wtApi = require('wikitranslate-api');

let app = koa();

app.use(koaStatic('./node_modules/wikitranslate-client/dist'));

app.use(koaMount('/api', wtApi));

module.exports = app.listen(process.env.PORT || 3000);
