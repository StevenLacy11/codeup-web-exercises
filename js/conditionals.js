"use strict";
/* ########################################################################## */
console.log("HELLOO")
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// function analyzeColor(x) {
//     var x = prompt("What color am I thinking of?")
//     if (x === "blue") {
//        console.log("blue is the color of the sky");
//     }
//     else if (x === "red") {
//        console.log("Strawberries are red");
//     }
//     else if (x === "cyan") {
//        console.log("I don't know anything about cyan");
//     }
//     else {
//       console.log("Nice try but you failed");
//     }
//     return("Your guess was " + x);
// }
//     console.log(analyzeColor());
//
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// //var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// //var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
// // function analyzeColor(randomColor){
// // }
// // console.log(randomColor)
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
//
// var colors = prompt("What is your favorite color?");
//
// //switch = if
// switch(colors) {
// //case = decisions
//     case "red":
//         alert("red is a good color.");
//         break; // stops reading the code
// //case = decision
//     case "orange":
//         alert("orange is ok.");
//         break; // stops reading the code
//     //case = decisions
//     case "yellow":
//         alert("yellow is gross");
//         break; // stops reading the code
// //case = decisions
//     case "green":
//         alert("green is a good color.");
//         break; // stops reading the code
// //case = decisions
//     case "blue":
//         alert("Blue is my favorite color.");
//         break; // stops reading the code
// //case = decisions
//     case "indigo":
//         alert("is close to blue.");
//         break; // stops reading the code
// //case = decisions
//     case "violet":
//         alert("violet is great");
//         break; // stops reading the code
// //default = else
//     default:
//         alert("You think " + colors + " is a real color?" + "\nPick a different color next time.");
//         break; // stops reading code
// }
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
// var luckyNum = prompt("Pick a number between 1 and 5")
// var total = prompt("what was the total?")
//
// function calculateTotal(luckyNum, total) {
//     switch (luckyNum) {
//         case "0":
//             alert("You dont get a discount!")
//             return total;
//
//         case "1":
//             alert("You get 10% off.")
//             return total * 0.9
//
//         case "2":
//             alert("You get 25% off.")
//             return total * .25
//
//         case "3":
//             alert("You get 35% off.")
//             return total * .35
//
//         case "4":
//             alert("You get 50% off.")
//             return total * .50
//
//         case "5":
//             alert("You get everything for FREE!")
//             return total - total
//
//         default:
//             alert("Try again!")
//             break;
//
//     }
// }
// alert("Your total today is $" + calculateTotal(luckyNum, total));
//
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
//  //var luckyNumber = Math.floor(Math.random() * 6);
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */
// var isEnter = confirm("Would you like to enter a number?");
//
// if (isEnter === true){
//     var userNumber = prompt("Great, please enter a number.")
//
//     if(isNaN(userNumber) === true) {
//         alert("That was not a number")
//     }
//     else{
//         if (userNumber % 2 === 0){
//             alert("This is an even number.")
//         }
//         else {
//             alert("This is an odd number.")
//         }
//     }
//
//
//     userNumber = parseInt(userNumber);
//     var plusHundred = userNumber + 100;
//     alert(userNumber + " plus 100 is " + plusHundred);
//
//     if(userNumber > 0){
//         alert(userNumber + " is positive.");
//     }
//     else if (userNumber < 0){
//         alert(userNumber + " is negative.")
//     }
//     else{
//         alert("0 is not positive or negative.")
//         }
//
// }
//
// function isEven(number){
//     return number % 2 === 0;
// }
//
// function addHundred(number){
//     return number + 100;
// }
//
// function isPositive(number){
//     if (number > 0){
//         return true;
//     }
//     else if (number < 0){
//         return false;
//     }
//     else {
//         return "not positive or negative";
//     }
// }
//
// function isString(number) {
//     return isNaN(number) === true;
// }
//
// if (isEnter) {
//     var userNumber = prompt("Great, please enter a number.");
//     if (isString(userNumber)) {
//         alert("That is not a number.");
//     } else {
//         userNumber = Number(userNumber);
//         if (isEven(userNumber)) {
//             alert(userNumber + " is even.");
//         } else {
//             alert(userNumber + " is odd.");
//         }
//         alert(userNumber + " plus 100 is " + addHundred(userNumber))
//     }
// }