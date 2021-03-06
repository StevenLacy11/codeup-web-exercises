//What's going on with these objects?
//Well: an OBJECT is a grouping of data + functionality
//Our data. . we call properties [in a 'key:value' pair]
//Our functions . . we call methods.

//Let's set up an object and .log it to see what we're looking at:

// var myCounty = {
// 	name: "Guadalupe",
// 	countySeat: "Comal",
// 	currentPop: 166847
// }
//
// console.log(myCounty);
//
// var myDog = {
// 	name: "Cooper", //property = key:value
// 	age: 4, //property
// 	breed: "Australian Shepherd" //property
// }
//
// console.log(myDog);myDog

//.log-ing the above gets us the object 'printed' or 'viewed' in the console where we can click into the object to see its shape [properties]

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
* New Object Instance vs. Object Literal Notation *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We can call the 'constructor' for an object and use it to create our objects:


// var myObject1 = new Object();
//
// console.log(myObject1)

//More often, we'll use this object literal notation structure as shown above and below:


// var myObject2 = {};
//
// console.log(myObject2);

//* TODO: Create a new Object and call it 'myCar' using either way to do so shown above (object instance or object literal)

var myCar = {};
var car2 = {};
// console.log(myCar)

// That's great! But our car object doesn't have much going on, does it? There's no depth or meat to it - how can we fill our object in?

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                   Properties                    *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We assign properties to objects - properties are pieces of data and fill in the guts / details of our object

//Let's take myCar. . and actually line out what my car is.

// We can use dot notation to do so:

myCar.make = "Subaru";
// Or array notation:

myCar["model"] = "WRX";


// var Car2 = {
// 	make: "chrysler",
// 	model: "pacifica",
// 	color: "silver",
// 	year: 2017
// };
//In general, dot notation is preferred of the two notations
//We can also set up our objects and properties/methods during object creation


// TODO: Fill in your myCar object with properties of make, model, and year with the correct values. If you don't own a vehicle, fill in the details with your favorite vehicle.

//For me? I'm missing the year for myCar so. .
myCar.year = 2020;
// console.log(myCar);

//Now I have a completed example of the myCar object - the model and make were added above in prior examples

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*           Object Properties && Methods          *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

//With our myCar objects set up, let's start utilizing them and diving into them!
//We can use dot notation or array notation in similar ways to start accessing these properties

//Let's share some information about our cars :)

// alert("Hey y'all I own a " + myCar.make + " " + myCar.model);

//We can tap into our prior understanding of assigning variables thus far and assign a property to a variable:

var myCarYear = myCar.year;

// alert("Whoops, I forgot to tell y'all what year my vehicle was " + myCarYear);

//What if we wanted to create a more complicated piece of data? Perhaps a list of our cars FEATURES?

myCar.features = ["heated seats", "AWD", "turbo", "standard transmission"];

//Now we could do something like this. . a list of those features in the console

// for(var i = 0; i < myCar.features.length; i++){
// 	console.log("Here is one of my cars features: " + myCar.features[i]);
// }

// console.log(myCar.features);
// TODO: Add an array of features that your vehicle has!

//I already added an array of features above in the lecture, so I'm good to go.

//What about who owns our car? That could be an object itself if we think it through - the owner has a firstName and a lastName at the very least, right?

var carOwner = {
	firstName: "Steven",
	lastName: "Lacy",
	age: "26",
	zipCode: 78130,
	contactPhone: "mobile",
	phoneNumber: 5555555555
}

//Let's try nesting this object inside of our car object we've been building out

myCar.owner = carOwner;

// console.log(myCar);

// TODO: Nest a 'carOwner' object of your own into this growing myCar object and console.log the results!

//An object can also contain within itself a method (function). We can set it up similarly to our properties, but with a value that is the function expression
//property:num
//property: "string"
//* property: function(){....} //   NOTE no function name

var turnMyCarOn = function (){
	alert("Putting my key in the ignition and fired up the " + this.make + " " + this.model);
};

//option A
myCar.turnOn = turnMyCarOn;

//option B
// 	myCar.turnOn = function () {
// 		alert("Putting my key in the ignition and fired up the " + this.make + " " + this.model);
// };
/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                 Arrays of Objects               *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/
var Car2 = {
	make: "chrysler",
	model: "pacifica",
	color: "silver",
	year: 2017,
	owner: {firstName: "Steven",
		lastName: "Lacy"},
		turnOn:turnMyCarOn
};
//Let's tie some things together: Let's make a garage with another car!

var theGarage = [myCar, Car2];

console.log(theGarage)

//Now: loop through an ARRAY of OBJECTS, accessing our turnOn function for our vehicles
//Also note: we used the keyword *this* on the other vehicle's turnOn function, so this will be a good experiment to see the results

theGarage.forEach(function(car){
	car.turnOn();
})


//One final TODO: A bigger task - set up your own garage and add at least another vehicle into it. Log your garage array to verify it contains the cars you want - once your garage has the right cars, write a loop to access some properties or a method from them!