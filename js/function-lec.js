"use strict";
(function () {
//     console.log("Welcome to functions");
//
//     function sayHello() {           //This is to run the script smoothly.
//         console.log("Hello!");
//     }
//
//     console.log("In the file after creating the sayHello function.");
//
//     sayHello();
//
// // define an anonymous functions
//     var sayHowdy = function () {            //This is for testing in the console.
//         console.log("Howdy!");
//     }
//
// // Arguments and Parameters
//     function add(x, y) {
//         return x + y;
//     }
//
//     console.log("add(2,3) " + add(2, 3));
//
//     function subtract(x, y) {
//         return x - y;
//     }
//
// // Scope
//     var instructor = "Douglas";
//     var day = "Friday";
//
//     function tellTheDay() {
//         return "Tell " + instructor + " it's " + day + "!";
//     }
//
//     function greeting() {                    // username is in the local scope of the function
//         var username = "Kenneth";           // so it cant be called outside of the function.
//         return "Hi, " + username;
//     }
//
//     console.log(greeting());
//
// //console.log(username);
//
//     function checkDay() {
//         var day = "Monday";
//         return day;
//     }
//
//     console.log("It's " + checkDay());

	// Why pay a fortune teller when you can just program your fortune yourself?
	//
	//     Write a function named tellFortune that:
	//     takes 4 arguments: number of children, partner's name, geographic location, job title.
	//
	//
	// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
	//
	//
	// Call that function 3 times with 3 different values for the arguments.



	// Warm-up
	//



	function tellFortune(jobTitle, geolocation, partner, numKids) {

		var future = 'You will be a ' + jobTitle + ' in ' + geolocation + ' and married to ' +
			partner + ' with ' + numKids + ' kids.';
		console.log(future);
	}
	tellFortune('astronaut', 'Spain', 'Shaq', 3);
	tellFortune('stunt double', 'Japan', 'Bruce Wayne', 9);
	tellFortune('Elvis impersonator', 'Russia', 'Elon Musk', 0);

})();



