"use strict";

$(document).ready(function () {


	var weatherOptions = {
		APPID: weatherKey,
		units: "imperial",
		lat: 29.6928,
		lon: -98.1122
	};
	mapboxgl.accessToken = mapboxKey;
	var map = new mapboxgl.Map({
		container: 'map',
		maxZoom: 12,
		minZoom: 6,
		zoom: 12,
		center: [-75.789, 41.874],
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~map~~~~~~~~~~~~~~~~~~~~
	map.setStyle("mapbox://styles/mapbox/satellite-streets-v11")
	map.setZoom(7)
	map.setCenter([-98.1152, 29.6970])

	var marker = new mapboxgl.Marker({
		color: "darkBlue",
	}).setLngLat({lng: -98.1122, lat: 29.6928}).addTo(map).setDraggable(true)

	marker.on("dragend", () => {
		var results = marker.getLngLat();
		console.log(results.lat)
		weatherOptions.lat = results.lat
		weatherOptions.lon = results.lng
		renderFiveDays()
	})
	renderFiveDays();


	function renderFiveDays() {
		$.get("http://api.openweathermap.org/data/2.5/forecast", weatherOptions)
			.done(function (data) {
				$(".container").html("")
//~~~~~~~~~~~~~~~These are the five day variables~~~~~~~~~~~~
				for (var i = 0; i < data.list.length; i += 8) {
					var name = data.city.name
					var temp_max = data.list[i].main.temp_max
					var temp_min = data.list[i].main.temp_min
					var temp = data.list[i].main.temp
					var feels_like = data.list[i].main.feels_like
					var humidity = data.list[i].main.humidity
					var sky_description = data.list[i].weather[0].description
					var date = new Date(data.list[i].dt * 1000).toLocaleDateString("en-US", {})
					var img = '<img src="http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png"  alt="weather image"/>'

// ~~~~~~~~~~~~~~~~~~~~~This puts the data to the HTML five day ~~~~~~~~~

					var html = '<div class="card border text-center">'
						+ '<h6 class="card-header">' + name + "<br>" + date + '</h6>'
						+ ("Average " + Math.round(temp) + "°" + "F" + "</br>" + img + "</br> with " + sky_description + "</br>" + "Feels like " + Math.round(feels_like) + "°" + "F</br>" + "Day " + Math.round(temp_max) + "°" + "F" + " ↑</br>" + "Night " + Math.round(temp_min) + "°" + "F" + " ↓</br>" + "Humidity " + humidity + "%</br>")
						+ '</div>' + "</br>"

					$('.container').append(html);
				}
			})
	}
})
//weather.main; .description
//main. temp_max; temp_min; feels_like; humidity
// wind.gust
//city sunrise, sunset
