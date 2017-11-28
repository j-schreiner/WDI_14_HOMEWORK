var currentyear = prompt("What is the current year?");
var guess1 = prompt("What year do you think they were born in?");
var guess2 = prompt("What is your second guess?");

var currentAge1 = currentyear - guess1;
var currentAge2 = currentyear - guess2;

console.log("They are either " + currentAge1 + " or " + currentAge2);
