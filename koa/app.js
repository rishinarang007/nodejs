var koa = require("koa");
var app = koa();
var route = require("koa-route");
var parse = require("co-body");
var monk = require("monk");
var wrap = require("co-monk");
var db = monk("localhost/koa_users");
var users = wrap(db.get("users"));

app.use(route.post("/user", saveUser));
app.use(route.get("/user/:id", getUser));

app.use(function* (){

	//console.log(this.request)
	//console.log(this.request.req)
})

function *saveUser () {
	var userFromRequest = yield parse(this);
	try{
	var user = yield users.insert(userFromRequest);	
}catch(error){
	console.log(error)
}
	
	this.body = user;
	this.set("Location", "/user/" + user._id);
	this.status = 201; // CREATED OK
};

function *getUser (id) {
	var user = yield users.findById(id);
	this.body = user;
	this.status = 200; //OK
};

app.listen(3000);
console.log("The app is listening. Port 3000");