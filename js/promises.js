"use strict"
$(document).ready(function () {

	fetch(`https://api.github.com/users/StevenLacy11/events`, {headers: {"Authorization": promiseRing}})
		.then((response) => response.json())
		.then((Data) => {
			console.log(Data[0].created_at);
		})
	const chill = ms => new Promise(resolve => setTimeout(resolve, ms));
	chill(6000).then(() => console.log(`runs after 6 seconds`));

})
