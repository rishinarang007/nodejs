var co = require("co");
var wait = require("co-wait");

co(function *(){

	console.time("sequence");

	yield wait(1000);
	yield wait(2000);
	yield wait(3000);

	console.timeEnd("sequence");
})