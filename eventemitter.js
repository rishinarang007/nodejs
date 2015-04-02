var Resource = require("./resource");


var r = new Resource(5);

r.on("start", function(){

	console.log("sart")
})

r.on("data", function(count){

	console.log(count)
})

r.on("end", function(){

	console.log("end")
})