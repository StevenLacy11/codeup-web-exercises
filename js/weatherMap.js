"use strict";

$(document).ready(function () {

	//~~~~~~ Grabs the weather~~~~~~~~~~~~~~
	$.get("http://api.openweathermap.org/data/2.5/weather", {
		APPID: weatherKey,
		q: "New Braunfels, US",
		units: "imperial",
	})
		.done(function (data) {
			console.log(data)


//~~~~~~~~~~~~~~~~~~~~~~~~~~These are the current variables~~~~~~~~~~~~~~~

			var current_name = data.name
			var current_temp_max = data.main.temp_max
			var current_temp_min = data.main.temp_min
			var current_temp = data.main.temp
			var current_feels_like = data.main.feels_like
			var current_humidity = data.main.humidity
			var current_img = '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png"  alt="weather image"/>'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Need to capitalize ~~~~~~~~~~~~~~~~~~~~

			var current_sky_description = data.weather[0].description


//~~~~~~~~~~~~~~~~~~~~~ Test each path of variables!!!!!!!!!!!!!!!!! ~~~~~~~~~~~~~~~~~~~~

			console.log(current_temp_max)

// ~~~~~~~~This puts the data to the HTML Current ~~~~~~~~~
			$(".current-title").html(current_name)

			$(".current-text").html("Currently " + Math.round(current_temp) + "°" + "F" + "</br>" + current_img + "</br> with " + current_sky_description + "</br>" + "Feels like " + Math.round(current_feels_like) + "°" + "F</br>" + "Day " + Math.round(current_temp_max) + "°" + "F" + " ↑</br>" + "Night " + Math.round(current_temp_min) + "°" + "F" + " ↓</br>" + "Humidity " + current_humidity + "%</br>")


		})
})

$.get("http://api.openweathermap.org/data/2.5/forecast", {
	APPID: weatherKey,
	q: "New Braunfels, US",
	units: "imperial"
})

	.done(function (data) {
		console.log(data.list)

//~~~~~~~~~~~~~~~These are the five day variables~~~~~~~~~~~~
		for (var i = 0; i < data.list.length; i += 8) {
			var name = data.city.name
			var temp_max = data.list[i].main.temp_max
			var temp_min = data.list[i].main.temp_min
			var temp = data.list[i].main.temp
			var feels_like = data.list[i].main.feels_like
			var humidity = data.list[i].main.humidity
			var sky_description = data.list[i].weather[0].description
			var date = new Date(data.list[i].dt * 1000).toLocaleDateString("en-US")
			console.log(data.list[i])
			var img = '<img src="http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png"  alt="weather image"/>'


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Need to capitalize ~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~~~~~~~~~ Test each path of variables!!!!!!!!!!!!!!!!! ~~~~~~~~~~~~~~~~~~~~

			console.log(data.list[i].weather[0].icon)

// ~~~~~~~~~~~~~~~~~~~~~This puts the data to the HTML five day ~~~~~~~~~

			var html = '<div class="card border text-center">'
				+ '<h6 class="card-header">' + name + "<br>" + date + '</h6>' + ("Average " + Math.round(temp) + "°" + "F" + "</br>" + img + "</br> with " + sky_description + "</br>" + "Feels like " + Math.round(feels_like) + "°" + "F</br>" + "Day " + Math.round(temp_max) + "°" + "F" + " ↑</br>" + "Night " + Math.round(temp_min) + "°" + "F" + " ↓</br>" + "Humidity " + humidity + "%</br>")
				+ '</div>' + "</br>"


			$('.container').append(html);

		}
	});
//weather.main; .description
//main. temp_max; temp_min; feels_like; humidity
// wind.gust
//city sunrise, sunset
