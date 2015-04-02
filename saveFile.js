var request = require("request");
var fs = require("fs");

request("http://google.com").pipe(fs.createWriteStream("index.html"))

