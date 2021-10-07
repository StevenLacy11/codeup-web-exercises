"use strict";

$(document).ready(function () {

	//~~~~~~ Grabs the weather~~~~~~~~~~~~~~
	$.get("http://api.openweathermap.org/data/2.5/forecast", {
		APPID: weatherKey,
		q: "New Braunfels, US",
		units: "imperial"
	})

		//~~~~~~~~posts the weather~~~~~~~~~~
		.done(function (data) {
			console.log('5 day forecast', data);

//~~~~~~~~~~~~~~~These are the variables~~~~~~~~~~~~
			var temp = data.list[0].main.temp
			var name = data.city.name

// ~~~~~~~~This puts the data to the HTML ~~~~~~~~~
			$(".card-title").html(name)
			$(".card-text").html("Curently " + Math.round(temp) + "°" + " F")


		})

});