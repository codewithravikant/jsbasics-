<<<<<<< HEAD
/*
Generate Random Fractions with JavaScript
Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random 
decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

Note: Like Storing Values with the Assignment Operator, all function calls will
 be resolved before the return executes, so we can return the value of the Math.random() function.

Change randomFraction to return a random number instead of returning 0.

*/
function randomFraction() {

    // Only change code below this line
  var result = 0;
  while (result === 0){
    result = Math.random();
  }
    return result;
  
    // Only change code above this line
  }

/*
JavaScript Algorithms and Data Structures
Basic JavaScript
Generate Random Whole Numbers with JavaScript
It's great that we can generate random decimal numbers, but it's even more useful if
 we use it to generate random whole numbers.

Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() to round the number down to its nearest whole number.
Remember that Math.random() can never quite return a 1 and, because we're rounding down, 
it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);
We are calling Math.random(), multiplying the result by 20, then passing the value to
 Math.floor() function to round the value down to the nearest whole number.

Use this technique to generate and return a random whole number between 0 and 9.

*/
function randomWholeNum() {

  // Only change code below this line
return Math.floor(Math.random() * 10);
}

/*
Generate Random Whole Numbers within a Range
Instead of generating a random whole number between zero and a given number 
like we did before, we can generate a random whole number that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min
Create a function called randomRange that takes a range myMin and myMax and returns a
random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

Code Explanation
Math.random() generates our random number between 0 and ≈ 0.9.
Before multiplying it, it resolves the part between parenthesis (myMax - myMin + 1)
 because of the grouping operator ( ).
The result of that multiplication is followed by adding myMin and then “rounded” to the 
largest integer less than or equal to it (eg: 9.9 would result in 9)
If the values were myMin = 1, myMax= 10, one result could be the following:

Math.random() = 0.8244326990411024
(myMax - myMin + 1) = 10 - 1 + 1 -> 10
a * b = 8.244326990411024
c + myMin = 9.244326990411024
Math.floor(9.244326990411024) = 9
*/

function randomRange(myMin, myMax) {
  // Only change code below this line
 return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
  // Only change code above this line
}

/*
Use the parseInt Function
The parseInt() function parses a string and returns an integer. Here's an example:

var a = parseInt("007");
The above function converts the string 007 to the integer 7. If the first character in the 
string can't be converted into a number, then it returns NaN.

Use parseInt() in the convertToInteger function so it converts the input string str 
into an integer, and returns it.

Problem Explanation
The parseInt() function will take any string parameter representing a number and 
return its integer value.

Hints
Hint 1
parseInt() should be used inside your function and return whatever str is, assuming 
that str is a string representing some number.
*/
function convertToInteger(str) {
  return parseInt(str);
  }
  
  convertToInteger("56");
/*
Use the parseInt Function with a Radix
The parseInt() function parses a string and returns an integer. 
It takes a second argument for the radix, which specifies the base of the
 number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix);
And here's an example:

var a = parseInt("11", 2);
The radix variable says that 11 is in the binary system, or base 2. 
This example converts the string 11 to an integer 3.

Use parseInt() in the convertToInteger function so it converts a
 binary number to an integer and returns it.
Hint 1
If you use a variable to assign the result of parseInt(str) to it, remember to return that variable.
Otherwise you can just use a return statement for your function.

Hint 2
In this exercise you need to “convert” a binary number into a decimal number using the 
radix parameter in order to specify the base on which the input number is represented on.

Code Explanation
The function takes str and returns an integer instead of a string but “understanding” its a binary 
number instead of a decimal one thanks to the radix parameter (2).
Relevant Links
“parseInt()” - MDN JavaScript reference 250
“Radix” - Wikipedia 696

*/


function convertToInteger(str) {
  return parseInt(str, 2);
  }
  convertToInteger("10011");


  /*

Use the Conditional (Ternary) Operator
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the
 condition returns true, and c is the code to run when the condition returns false.

The following function uses an if/else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
Use the conditional operator in the checkEqual function to check if two numbers are equal or not.
 The function should return either the string Equal or the string Not Equal.

 Code Explanation
A function checkEqual is declared, it accepts two parameters in variables a and b.
The return statement would return the value of the evaluated ternary expression.
The ternary expression checks if a and b are equal or not and returns Equal or Not Equal respectively.
*/
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);


  /*
Use Multiple Conditional (Ternary) Operators
In the previous challenge, you used a single conditional operator. You can also chain them t
ogether to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
It is considered best practice to format multiple conditional operators 
such that each condition is on a separate line, as shown above. 
Using multiple conditional operators without proper indentation may make your code hard to read. For example:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
In the checkSign function, use multiple conditional operators - following the recommended 
format used in findGreaterOrEqual - to check if a number is positive, negative or zero.
 The function should return positive, negative or zero.
  
  */

 function checkSign(num) {
  return num > 0? "positive" : num <0 ?"negative" : "zero";
  }
  
  checkSign(10);


  /*
  Use Recursion to Create a Countdown
In a previous challenge, you learned how to use recursion to replace a for loop. Now, 
let's look at a more complex function that returns an array of consecutive integers starting with 1 
through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The base case tells the recursive 
function when it no longer needs to call itself. It is a simple case where the return value is already known. 
There will also be a recursive call which executes the original function with different arguments.
 If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 
through n. This function will need to accept an argument, n, representing the final number. Then it will 
need to call itself with progressively smaller values of n until it reaches 1. You could 
write the function as follows:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
The value [1, 2, 3, 4, 5] will be displayed in the console.

At first, this seems counterintuitive since the value of n decreases, but the values in
 the final array are increasing. This happens because the push happens last, after the 
 recursive call has returned. At the point where n is pushed into the array, countup(n - 1)
  has already been evaluated and returned [1, 2, ..., n - 1].

We have defined a function called countdown with one parameter (n). The function should use 
recursion to return an array containing the integers n through 1 based on the n parameter. 
If the function is called with a number less than 1, the function should return an empty array.
 For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
 Your function must use recursion by calling itself and must not use loops of any kind.
  
  */
// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log(countdown(10));

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}

function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}

function countdown(n){
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}
// Only change code above this line

/*
Use Recursion to Create a Range of Numbers
Continuing from the previous challenge, we provide you another opportunity 
to create a recursive function to solve a problem.
We have defined a function named rangeOfNumbers with two parameters. 
The function should return an array of integers which begins with a number 
represented by the startNum parameter and ends with a number represented by the 
endNum parameter. The starting number will always be less than or equal to the ending number.
 Your function must use recursion by calling itself and not use loops of any kind. It should also work 
 for cases where both startNum and endNum are the same.
*/
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
}

/*

Explore Differences Between the var and let Keywords
One of the biggest problems with declaring variables with the var 
keyword is that you can overwrite variable declarations without an error.

var camper = 'James';
var camper = 'David';
console.log(camper);
Here the console will display the string David.

As you can see in the code above, the camper variable is originally declared as 
James and then overridden to be David. In a small application, you might not run into 
this type of problem, but when your code becomes larger, you might accidentally overwrite a
 variable that you did not intend to overwrite. Because this behavior does not throw an error, 
 searching and fixing bugs becomes more difficult.
A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. 
If you were to replace var with let in the variable declarations of the code above, the result would be an error.

let camper = 'James';
let camper = 'David';
This error can be seen in the console of your browser. So unlike var, when using let,
 a variable with the same name can only be declared once. Note the "use strict". This enables 
 Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

"use strict";
x = 3.14;
This will display an error that x is not defined.

Update the code so it only uses the let keyword.

 */

=======
/*
Generate Random Fractions with JavaScript
Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random 
decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

Note: Like Storing Values with the Assignment Operator, all function calls will
 be resolved before the return executes, so we can return the value of the Math.random() function.

Change randomFraction to return a random number instead of returning 0.

*/
function randomFraction() {

    // Only change code below this line
  var result = 0;
  while (result === 0){
    result = Math.random();
  }
    return result;
  
    // Only change code above this line
  }

/*
JavaScript Algorithms and Data Structures
Basic JavaScript
Generate Random Whole Numbers with JavaScript
It's great that we can generate random decimal numbers, but it's even more useful if
 we use it to generate random whole numbers.

Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() to round the number down to its nearest whole number.
Remember that Math.random() can never quite return a 1 and, because we're rounding down, 
it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);
We are calling Math.random(), multiplying the result by 20, then passing the value to
 Math.floor() function to round the value down to the nearest whole number.

Use this technique to generate and return a random whole number between 0 and 9.

*/
function randomWholeNum() {

  // Only change code below this line
return Math.floor(Math.random() * 10);
}

/*
Generate Random Whole Numbers within a Range
Instead of generating a random whole number between zero and a given number 
like we did before, we can generate a random whole number that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min
Create a function called randomRange that takes a range myMin and myMax and returns a
random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

Code Explanation
Math.random() generates our random number between 0 and ≈ 0.9.
Before multiplying it, it resolves the part between parenthesis (myMax - myMin + 1)
 because of the grouping operator ( ).
The result of that multiplication is followed by adding myMin and then “rounded” to the 
largest integer less than or equal to it (eg: 9.9 would result in 9)
If the values were myMin = 1, myMax= 10, one result could be the following:

Math.random() = 0.8244326990411024
(myMax - myMin + 1) = 10 - 1 + 1 -> 10
a * b = 8.244326990411024
c + myMin = 9.244326990411024
Math.floor(9.244326990411024) = 9
*/

function randomRange(myMin, myMax) {
  // Only change code below this line
 return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
  // Only change code above this line
}

/*
Use the parseInt Function
The parseInt() function parses a string and returns an integer. Here's an example:

var a = parseInt("007");
The above function converts the string 007 to the integer 7. If the first character in the 
string can't be converted into a number, then it returns NaN.

Use parseInt() in the convertToInteger function so it converts the input string str 
into an integer, and returns it.

Problem Explanation
The parseInt() function will take any string parameter representing a number and 
return its integer value.

Hints
Hint 1
parseInt() should be used inside your function and return whatever str is, assuming 
that str is a string representing some number.
*/
function convertToInteger(str) {
  return parseInt(str);
  }
  
  convertToInteger("56");
/*
Use the parseInt Function with a Radix
The parseInt() function parses a string and returns an integer. 
It takes a second argument for the radix, which specifies the base of the
 number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix);
And here's an example:

var a = parseInt("11", 2);
The radix variable says that 11 is in the binary system, or base 2. 
This example converts the string 11 to an integer 3.

Use parseInt() in the convertToInteger function so it converts a
 binary number to an integer and returns it.
Hint 1
If you use a variable to assign the result of parseInt(str) to it, remember to return that variable.
Otherwise you can just use a return statement for your function.

Hint 2
In this exercise you need to “convert” a binary number into a decimal number using the 
radix parameter in order to specify the base on which the input number is represented on.

Code Explanation
The function takes str and returns an integer instead of a string but “understanding” its a binary 
number instead of a decimal one thanks to the radix parameter (2).
Relevant Links
“parseInt()” - MDN JavaScript reference 250
“Radix” - Wikipedia 696

*/


function convertToInteger(str) {
  return parseInt(str, 2);
  }
  convertToInteger("10011");


  /*

Use the Conditional (Ternary) Operator
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the
 condition returns true, and c is the code to run when the condition returns false.

The following function uses an if/else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
Use the conditional operator in the checkEqual function to check if two numbers are equal or not.
 The function should return either the string Equal or the string Not Equal.

 Code Explanation
A function checkEqual is declared, it accepts two parameters in variables a and b.
The return statement would return the value of the evaluated ternary expression.
The ternary expression checks if a and b are equal or not and returns Equal or Not Equal respectively.
*/
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);


  /*
Use Multiple Conditional (Ternary) Operators
In the previous challenge, you used a single conditional operator. You can also chain them t
ogether to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
It is considered best practice to format multiple conditional operators 
such that each condition is on a separate line, as shown above. 
Using multiple conditional operators without proper indentation may make your code hard to read. For example:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
In the checkSign function, use multiple conditional operators - following the recommended 
format used in findGreaterOrEqual - to check if a number is positive, negative or zero.
 The function should return positive, negative or zero.
  
  */

 function checkSign(num) {
  return num > 0? "positive" : num <0 ?"negative" : "zero";
  }
  
  checkSign(10);


  /*
  Use Recursion to Create a Countdown
In a previous challenge, you learned how to use recursion to replace a for loop. Now, 
let's look at a more complex function that returns an array of consecutive integers starting with 1 
through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The base case tells the recursive 
function when it no longer needs to call itself. It is a simple case where the return value is already known. 
There will also be a recursive call which executes the original function with different arguments.
 If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 
through n. This function will need to accept an argument, n, representing the final number. Then it will 
need to call itself with progressively smaller values of n until it reaches 1. You could 
write the function as follows:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
The value [1, 2, 3, 4, 5] will be displayed in the console.

At first, this seems counterintuitive since the value of n decreases, but the values in
 the final array are increasing. This happens because the push happens last, after the 
 recursive call has returned. At the point where n is pushed into the array, countup(n - 1)
  has already been evaluated and returned [1, 2, ..., n - 1].

We have defined a function called countdown with one parameter (n). The function should use 
recursion to return an array containing the integers n through 1 based on the n parameter. 
If the function is called with a number less than 1, the function should return an empty array.
 For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
 Your function must use recursion by calling itself and must not use loops of any kind.
  
  */
// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log(countdown(10));

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}

function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}

function countdown(n){
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}
// Only change code above this line

/*
Use Recursion to Create a Range of Numbers
Continuing from the previous challenge, we provide you another opportunity 
to create a recursive function to solve a problem.
We have defined a function named rangeOfNumbers with two parameters. 
The function should return an array of integers which begins with a number 
represented by the startNum parameter and ends with a number represented by the 
endNum parameter. The starting number will always be less than or equal to the ending number.
 Your function must use recursion by calling itself and not use loops of any kind. It should also work 
 for cases where both startNum and endNum are the same.
*/
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
}

/*

Explore Differences Between the var and let Keywords
One of the biggest problems with declaring variables with the var 
keyword is that you can overwrite variable declarations without an error.

var camper = 'James';
var camper = 'David';
console.log(camper);
Here the console will display the string David.

As you can see in the code above, the camper variable is originally declared as 
James and then overridden to be David. In a small application, you might not run into 
this type of problem, but when your code becomes larger, you might accidentally overwrite a
 variable that you did not intend to overwrite. Because this behavior does not throw an error, 
 searching and fixing bugs becomes more difficult.
A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. 
If you were to replace var with let in the variable declarations of the code above, the result would be an error.

let camper = 'James';
let camper = 'David';
This error can be seen in the console of your browser. So unlike var, when using let,
 a variable with the same name can only be declared once. Note the "use strict". This enables 
 Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

"use strict";
x = 3.14;
This will display an error that x is not defined.

Update the code so it only uses the let keyword.

 */

>>>>>>> 20ffccdd332c124cfa1ce46e510bae554ae470f3
