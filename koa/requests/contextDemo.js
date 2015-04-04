var app = require("koa")();
var parse = require("co-body");

app.use(function *(){
	var bodyParsed = yield parse(this);

	if(this.method === "POST") this.body = "You posted: " + bodyParsed.name;

	if(this.method === "GET") this.body = "The path was: " + this.path;

	this.status = 200;
	this.body += "<br/>Request handled!";

});
app.listen(3000);