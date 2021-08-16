var isSunny = confirm("Is it sunny sunny outside?");
var isRaining = confirm("Is it raining outside?");

if(isSunny && !isRaining){
    alert("Dont forget your sunscreen");
}
else if (isSunny && isRaining){
    alert("YAY, you dont need sunscreen!");
}
else {
    alert("Good - too much sun can cause some issues as you get older");
}

        //if/else ternary(short hand syntax)
//(condition) ? if action here : else action here
(condition) ? console.log("This is a ternary") : console.log("this is a ternary");

        //Switch statements!!!!!!!

var pizzaPreference = prompt("What kind of pizza do you like?");

//switch = if
switch(pizzaPreference) {
   //case = decisions
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break; // stops reading the code
   //case = decision
    case "cheese":
        alert("Just plain cheese? Okay...");
        break; // stops reading the code
   // default = else
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break; // stops reading code
}


