var app = require("koa")();

app.use(function *(){
	console.log(this.request);
	console.log(this.request.req);
});
app.listen(3000);