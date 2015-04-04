var app = require("koa")();

app.use(function *(){
	console.log("Request is Content-Type: text/html; charset=utf-8: " + this.request.is('html'));
	console.log("Request is application/json: " + this.request.is('application/json'));
});
app.listen(3000);