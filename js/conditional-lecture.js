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