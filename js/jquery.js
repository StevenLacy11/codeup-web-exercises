"use strict";
var myKeys = "";


$("body").keyup(function (event) {
	console.log("The key you pressed was: " + event.key);
	myKeys += event.key;
	console.log(myKeys);
	if (myKeys === "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter") {
		alert("You have added 30 lives!")
		$('body').off('keyup');
	}
});

$("#color").keyup(function (event) {
	console.log("The key you pressed was: " + event.key);
	if (myKeys === "disco") {
		$("body").css("background-image", "url(img/giphy.gif")
		$('body').off('keyup');
	}
});

