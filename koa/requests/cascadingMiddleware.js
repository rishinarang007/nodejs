var app = require("koa")();

app.use(function *logger(next) {
	console.log("Before application");
	yield next;
	console.log("After application");
});

app.use(function *(){
	console.log("  In application")
	this.body = 'Hello World';
});

app.listen(3000);