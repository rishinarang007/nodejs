var app = require("koa")();

app.use(function *(){
	console.log(this.response);
	console.log(this.response.res);
});
app.listen(3000);