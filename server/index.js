const koa = require('koa');
const koaMount = require('koa-mount');
const koaStatic = require('koa-static');
const wtApi = require('wikitranslate-api');

const app = koa();

app.use(koaStatic('./node_modules/wikitranslate-client/dist'));

app.use(koaMount('/api', wtApi));

module.exports = app.listen(process.env.PORT || 3000);
