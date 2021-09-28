"use strict";

//~~~~~~~~~~~~~Elements~~~~~~~~~~~~~~~~~~~~~~~~~~~

$("*").css("font-family", "Indie Flower").css("background-color", "#00ffcc");

$("h1").css("font-family", "'Oswald', sans-serif").css("color", "#FF0033").css("text-align", "center").css("font-size", "3em").click(function () {
	$(this).css("color", "#FF8099")
});

$("li").css("background-color", "#FF0033").css("font-size", "20px").css("color", "#FF8099").hover(function () {
		$(this).css("background-color", "#00ffcc")
	},
	function () {
		$(this).css("background-color", "#ff0033")
	});

$("p").dblclick(function () {
	$(this).css("font-size", "18px")
});


//~~~~~~~~~~~~~IDs~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$("#first-p").css("background-color", "#FF8099").css("font-size", "20px").css("color", "#00ffcc");

$("#second-p").css("background-color", "#FF8099").css("font-size", "32px").css("margin", "20px").css("padding", "20px").css("border", "7px solid #FF0033").css("color", "#00ffcc").css("font-family", "Grechen Fuemen", "cursive");

//~~~~~~~~~~~~~~~~Classes~~~~~~~~~~~~~~~~~~~~~~~~~

$(".fa-li").css("background-color", "#FF0033").css("font-size", "20px");

$(".fas").css("background-color", "#FF0033");

$(".container").css("background-color", "#FF8099").css("margin", "20px").css("padding", "20px").css("border", "7px solid #FF0033");

