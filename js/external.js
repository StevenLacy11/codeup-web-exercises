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

    var littleM = parseInt(prompt("How many days have you had the Little Mermaid?"));
    var brotherB = parseInt(prompt("How many days have you had Brother Bear?"));
    var herc = parseInt(prompt("How many days have you had Hercules?"));
    var total= littleM *3 + brotherB *3 + herc *3;


            alert("The total amount that is owed for the three movies is \n$" + total +".");




//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

    var google = parseInt(prompt("how many hours did you work at google?"));
    var amazon = parseInt(prompt("how many hours did you work at amazon?"));
    var facebook = parseInt(prompt("how many hours did you work at facebook?"));
    var total = google * 400 + amazon + 380 + facebook * 350;



            alert("The amount you earned this week was $" + total + " \nNice work!");



//A student can be enrolled in a class only if the class is
// not full and the class schedule does not conflict with her current schedule.

     var classIsFull = confirm("Is the class you are trying to join full?");
     var hasScheduleConflicts = confirm("Do you have a class at 2:30 already?");

        alert("You can join the class is a " + (!classIsFull && !hasScheduleConflicts) + " statement.");



//A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired.Premium members do not need to buy a specific
// amount of products.

    var isOfferValid = confirm("Is the offer still valid?");
    var hasMoreThanTwoItems = parseInt(prompt("How many items do you have in your cart?")) > 2;
    var isPremiumMember = confirm("Are you a premium member?");
    var canUserUseOffer = (hasMoreThanTwoItems || isPremiumMember) && isOfferValid;

        alert("You can use this offer is a " + canUserUseOffer + " statement.");








