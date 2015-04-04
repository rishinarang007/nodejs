var app = require("koa")();

app.use(function *(){
	this.response.body = { name: "marcus" };
	this.response.status = 418;
	this.response.type = "application/json";
});
app.listen(3000);