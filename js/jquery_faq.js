"use strict";


$("dd").addClass("invisible");


$("button").click(function () {
	$("dd").toggleClass("invisible")
});

$("dt").click(function () {
	$(this).css({"background-color": "yellow", "width": "10%"})
});

$("#btn2").click(function () {
	$("ul").each(function () {
		$(this).children().last().css({"background-color": "yellow", "width": "10%"})
	})
});

$("h3").click(function () {
	$("ul").each(function () {
		$(this).children().css("font-weight", "bold")
	})
});

$("li").click(function () {
	$("ul").each(function () {
		$(this).children().first().css("color", "blue")
	})
});

