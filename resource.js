var EventEmitter = require("events").EventEmitter

var util = require("util")

function Resource(c){

	var e = this;

	process.nextTick(function(){

		var count = 0;

		e.emit("start")

		var t = setInterval(function(){

			e.emit("data" , ++count)

				if(count === c){

					e.emit("end", count);

					clearInterval(t);
				}

		},10)
	})

	return(e)

}

util.inherits(Resource, EventEmitter)

module.exports = Resource