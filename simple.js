var maxTime = 1000;

function evenDoubler(num, callback){

	var waitTime = Math.floor(Math.random()*(maxTime+1))

	if(num%2){

		setTimeout(function(){

				callback(new Error("number is not an even number"));

		}, waitTime)

		
	}else{

		setTimeout(function(){

				callback(null, num*2, waitTime)

		}, waitTime)

		
	}

}

function resultFunction(error, result, time){

	if(error){

		console.log(error);
	}else{

		console.log("result " + result , time)
	}

}

for (var i = 0; i < 10; i++) {

	evenDoubler(i, resultFunction)
}

console.log("start")
	