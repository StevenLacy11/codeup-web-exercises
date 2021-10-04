"use strict";
// function calculateDogAge(age, conversion) {
// 		var dogYears = age*conversion;
//
// 		console.log("Your dog is " + dogYears + " years old in dog years! " + "We used " + conversion + " to get your dogs age.");
//
// 	}
// calculateDogAge(4, 7);
// calculateDogAge(2, 7);
// calculateDogAge(10, 7);
//
// function calculateHumanAge(age, conversion){
// 	var humanYears = age/conversion;
//
// 	console.log("You are " + parseInt(humanYears) + " years old in dog years!" + " We used " + conversion + " to get your age in  dog years.");
// }
// calculateHumanAge(26, 7)
// calculateHumanAge(24, 7)
// calculateHumanAge(1, 7)


// var hasTacos = ["blueberry muffin", "banana", "yogurt", "cereal", "brisket and egg taco"]
//
// var noTacos = ["parfait", "omlette de frumage", "protein shake", "fasting"]
//
// tacoTuesdays(hasTacos)
// tacoTuesdays(noTacos)
//
// function tacoTuesdays(arr){
//
// 	for (var i = 0; i < arr.length; i++) {
// 		if(arr[i].includes("taco")){
// 	return true;
// 		}
// 	}
// 	return false;
//}

// function logEvens(a) {
// 	for (var i = 1; i <= a; i++) {
//
// 		if (i % 2 === 0) {
// 			console.log(i);
// 		}
// 	}
// }

// function logNum(a) {
// 	for (var i = 1; i <= a; i++) {
//
// 		if (i % 2 === 0) {
// 			console.log(i + " is an even number.");
// 		}
// 		else {
// 			console.log(i + " is an odd number.")
// 		}
// 	}
// }




$("p").click(function () {
	alert($(this).text())
});