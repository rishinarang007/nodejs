var app = require("koa")();
var logger = require("koa-logger");

app.use(logger);

app.use(function *(){
	this.body = "Hello World";
});

app.listen(3000);
console.log("The app is running on port 3000");