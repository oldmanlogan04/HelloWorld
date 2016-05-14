// Translate some of our pseudocode problems to JS

// Print out all even numbers between 1 and 50 (inclusive)
var number = 1;
while (number <= 50) {
	// check to see if number is even
	if (number % 2 == 0) { // == means check for equality
		console.log(number);
	}

	// increment number
	number = number + 1;
	
}

// Print all odd numbers between 4 and 40
for (var i=4; i <= 40; i++) {
	// check to see if i is odd
	if (i % 2 != 0) {
		console.log(i);
	}
}

// Functions - DRY: Don't Repeat Yourself


// function definition
function hello(name) {
  console.log("Hello " + name);
}

// run (or "call") the function, passing in different values for the input parameter
hello("Chris");
hello("Zach");

// we can also pass in variables as inputs
var yourName = "Jeff";
hello(yourName);


// absolute value function
function absoluteValue(num) {
  // if num is pos, return num
  if (num >= 0) {
    return num;
  }
  // if num is negative, return its opposite
  else {
    return -num;
  }
  
  // this doesn't get run ever
  console.log("hello");
  
}

var answer = absoluteValue(-5);
console.log('the absolute value of -5 is: ');
console.log(answer);


// max function
// return the max of two numbers (NOT print)
function max(x, y) {
  
  // x is bigger
  if (x >= y) {
    return x;
  }
  // y is bigger
  else {
    return y;
  }
  
}


// use lots of different test cases
console.log(max(2,3));
console.log(max(2,-3));
console.log(max(4,4));
console.log(max(-1,-2));
console.log(max(1,1.01));


// Arrays

var numArray = [1, 6, 13, -27, 5.6];
numArray[5] = 127; // [1, 6, 13, -27, 5.6, 127]

// Somebody asked the question of whether or not we can make an empty array. We can!
var emptyArray = [];

var stringArray = ["Delmar", "LaunchCode", "CWE"];

var mixedArray = ["4811 Delmar", 63108, "Fountain Park", true];

// let's print out each entry in our number array
for (var i=0; i < 5; i++) {
  console.log(numArray[i]);
}

// we can do the same for another array, but this is repetitive
for (var i=0; i < 3; i++) {
  console.log(stringArray[i]);
}

// let's make a function to print out *any* array
function printArray(arr){
	// using the 
  for (var i=0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray(numArray);
printArray(stringArray);
printArray(mixedArray);