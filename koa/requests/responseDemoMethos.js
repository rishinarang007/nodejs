var app = require("koa")();

app.use(function *(){
	this.response.set("Location", "/user/123");
	this.response.set({
	  'Etag': '1234',
	  'Last-Modified': new Date
	});
	this.response.redirect("http://www.marcusoft.net");
});
app.listen(3000);