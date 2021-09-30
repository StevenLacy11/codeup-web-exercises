"use strict";


$("dd").addClass("invisible");


$("button").click(function () {
	$("dd").toggleClass("invisible")
});

$("dt").click(function () {
	$(this).css({"background-color": "yellow", "width": "10%"})
});

