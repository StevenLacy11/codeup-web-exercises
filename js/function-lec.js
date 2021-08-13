"use strict";
(function () {
    console.log("Welcome to functions");

    function sayHello() {           //This is to run the script smoothly.
        console.log("Hello!");
    }

    console.log("In the file after creating the sayHello function.");

    sayHello();

// define an anonymous functions
    var sayHowdy = function () {            //This is for testing in the console.
        console.log("Howdy!");
    }

// Arguments and Parameters
    function add(x, y) {
        return x + y;
    }

    console.log("add(2,3) " + add(2, 3));

    function subtract(x, y) {
        return x - y;
    }

// Scope
    var instructor = "Douglas";
    var day = "Friday";

    function tellTheDay() {
        return "Tell " + instructor + " it's " + day + "!";
    }

    function greeting() {                    // username is in the local scope of the function
        var username = "Kenneth";           // so it cant be called outside of the function.
        return "Hi, " + username;
    }

    console.log(greeting());

//console.log(username);

    function checkDay() {
        var day = "Monday";
        return day;
    }

    console.log("It's " + checkDay());

})();



