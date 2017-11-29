

var daysOfTheWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
console.log(daysOfTheWeek);


daysOfTheWeek.pop();
console.log(daysOfTheWeek);


daysOfTheWeek.unshift("Sunday");
console.log(daysOfTheWeek);


var newDaysOfTheWeek = [["Monday","Tuesday","Wednesday","Thursday","Friday"],["Saturday","Sunday"]];
console.log(daysOfTheWeek);


newDaysOfTheWeek.pop();
console.log(daysOfTheWeek);


newDaysOfTheWeek[0].sort();
console.log(daysOfTheWeek);