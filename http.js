var http = require("http");

var options = {

	host : "http://www.google.com",
	port: 80,
	method: "GET",
	path:"/"
}

var request = http.get("http://www.google.com", function(response){

	response.pipe(process.stdout);
})

request.end()