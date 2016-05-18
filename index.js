var koa = require('koa');
var app = new koa();

app.use(ctx => {
	ctx.body = "Hello World";
});

app.listen(8080);