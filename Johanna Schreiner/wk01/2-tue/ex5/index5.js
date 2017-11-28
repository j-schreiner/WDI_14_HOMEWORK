var currentAge = prompt("How old are you?");
var maximumAge = prompt("How long do you think you will live?");
var estimatedAmountPerDay = prompt("How many do you think you'll eat per day?");
var lifetimeSupply = (maximumAge - currentAge) * estimatedAmountPerDay;

console.log("You will need " + lifetimeSupply + " to last you until the ripe old age of " + maximumAge + ".");