var render = require("./../lib/render.js")

var db = require("./../lib/db.js");

module.exports.newQuestion = function*(){

	var newQuestion = yield db.questions.find({});



	this.body = yield render("newQuestion", {questions: newQuestion})
}
