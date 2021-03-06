var koa = require("koa");
var app = koa();

app.use(function *xResponseTime (next) {
	var start = new Date;
	yield next;

	var ms = new Date - start;
	this.set("X-Response-Time", ms + " ms");
});

app.use(function *consoleLogger (next) {
	var start = new Date;
	yield next;

	var ms = new Date - start;
	console.log('%s %s - %s', this.method, this.url, ms);
});


app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);