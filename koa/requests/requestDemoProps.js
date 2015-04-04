var app = require("koa")();

app.use(function *(){
	console.log("this.request.header: " + this.request.header);
	console.log("this.request.method: " + this.request.method);
	console.log("this.request.url: " + this.request.url);
	console.log("this.request.path: " + this.request.path);
	console.log("this.request.querystring: " + this.request.querystring);
});
app.listen(3000);