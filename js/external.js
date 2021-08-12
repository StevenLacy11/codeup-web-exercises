"use strict";


    console.log("Hello from External js");

    alert("Welcome to my Website!");


    var userInput = prompt("What is your favorite color?");
    alert("That's awesome! My favorite color is also " + userInput + "!")




            //Complete exercise 3 from the previous lesson, but write your code in the external.js
            // file instead of in the console.
            //When the exercise asks you to use a number, instead use a
            // prompt to ask the user for that number.
            //Use an alert to show the results of each problem.


//You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

    var littleM = 3;
    var brotherB = 5;
    var herc = 1;
    var total;

        littleM = littleM * 3;
        brotherB = brotherB * 3;
        herc = herc * 3;
        total = littleM + brotherB + herc;

            alert("The total amount that is owed for the three movies is \n$" + total +".");




//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

    var google = 400;
    var amazon = 380;
    var facebook = 350;
    var total;

        google = google * 10;
        amazon = amazon * 6;
        facebook = facebook * 4;
        total = google + amazon + facebook;

            alert("The amount you earned this week was $" + total + " \nNice work!");



//A student can be enrolled in a class only if the class is
// not full and the class schedule does not conflict with her current schedule.

    var full = false;
    var conflict = false;
    var schedule;


       Boolean(schedule = full + conflict);
       alert(schedule);


//A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired.Premium members do not need to buy a specific
// amount of products.

    var x = x >= 2;
    var y;










