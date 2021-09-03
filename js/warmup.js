function calculateDogAge(age, conversion) {
		var dogYears = age*conversion;

		console.log("Your dog is " + dogYears + " years old in dog years! " + "We used " + conversion + " to get your dogs age.");

	}
calculateDogAge(4, 7);
calculateDogAge(2, 7);
calculateDogAge(10, 7);

function calculateHumanAge(age, conversion){
	var humanYears = age/conversion;

	console.log("You are " + parseInt(humanYears) + " years old in dog years!" + " We used " + conversion + " to get your age in  dog years.");
}
calculateHumanAge(26, 7)
calculateHumanAge(24, 7)
calculateHumanAge(1, 7)


