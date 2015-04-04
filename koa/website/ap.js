var koa = require("koa");
var app = koa();
var route = require("koa-route");
var serv = require("koa-static");

app.use(serv(__dirname + "/public"))


var homeRoutes = require("./routes/homeroutes.js");

app.use(route.get("/", homeRoutes.showHome));

var questionRoutes = require("./routes/questionRoutes.js");

app.use(route.get("/question", questionRoutes.newQuestion));



app.listen(3000);