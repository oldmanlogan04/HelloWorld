// JAVASCRIPT BASICS


// Javascript statements should end with a semi-colon

// variables are created using the var keyword
var numberOfQuarters = 0;
numberOfQuarters = 5;
numberOfQuarters = numberOfQuarters + 1;

var isWeekday = false;
var isWeekend = !isWeekday;

var launchCodeAddress = "4811 Delmar";
var launchCodeCity;

// loops
// print out 1..100

// Note: console.log(...) prints out whatever is in between the parentheses

// using a while loop
var numberToPrint = 1;
while (numberToPrint <= 100) {
	console.log(numberToPrint);
	numberToPrint = numberToPrint + 1;
}

// using a for loop
for (var numberToPrint = 1; numberToPrint <= 100; numberToPrint++) { 
	console.log(numberToPrint); 
}

// for (var counter = firstValue; test condition; update action) {
// do something
// }

// conditionals - absolute value example
if (x >= 0) 
{
	console.log(x);
} 
else 
{
	console.log(-x);
}