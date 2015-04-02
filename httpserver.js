var http = require("http");
var fs = require("fs");


http.createServer(function(req, response){

	response.writeHead(200, {"Content-type": "text/plain"});

	if(req.url === "/file.txt"){

		fs.createReadStream(__dirName+"/file.txt").pipe(response);
	}else{
		response.end("this ends a response");
	}
}).listen(3000)




