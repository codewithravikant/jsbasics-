Day 4
/*
Basic JavaScript: Return a Value from a Function with Return
We can pass values into a function with arguments. Y
ou can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
plusThree takes an argument for num and returns a value equal to num + 3.

Create a function timesFive that accepts one argument, multiplies it by 5,
 and returns the new value. 
 See the last line in the editor for an example of how you can test your timesFive function.

*/
function timesFive(num) {
  return num * 5;
}
var answer = timesFive(5); 
var answer = timesFive(2);
var answer = timesFive(0);


/*

 Understanding Undefined Value returned from a Function
A function can include the return statement but it does not have to. 
In the case that the function doesn't have a return statement, 
when you call it, the function processes the inner code but the returned value is undefined.

Example

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined
addSum is a function without a return statement. 
The function will change the global sum variable but the returned value of the function is undefined.

Create a function addFive without any arguments. 
This function adds 5 to the sum variable, but its returned value is undefined.

*/

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
var sum = 0;

function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();


/*

Assignment with a Returned Value
If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function sum which adds two numbers together, then:

ourSum = sum(5, 12);

will call sum function, which returns a value of 17 and assigns it to ourSum variable.

Call the processArg function with an argument of 7 and assign its return value to the variable processed.



*/
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);


/*

Stand in Line
In Computer Science a queue is an abstract Data Structure where items are kept in order. 
New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.


*/
function nextInLine(arr, item) {
  // Only change code below this line
    arr.push(item);
  var item = arr.shift();
  return item;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// other way 

function nextInLine(arr, item) {
  // Only change code below this line
    arr.push(item);
  var removed = arr.shift();
  return removed;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


/*

Understanding Boolean Values
Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is "on" and false is "off." These two states are mutually exclusive.

Note
Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

*/


function welcomeToBooleans() {

  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}


/*
Use Conditional Logic with If Statements
If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, 
defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, 
the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"
When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. 
Since it is true, the function returns "It was true". When we call test with a value of false, 
myCondition is not true and the statement in the curly braces is not executed and the function returns "It was false".

Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true and return "No,
 that was false" otherwise.

*/

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue){
  return "Yes, that was true"
}
return  "No, that was false"

  // Only change code above this line

}

/*

Comparison with the Equality Operator
There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal". In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:

1   ==  1   // true
1   ==  2   // false
1   == '1'  // true
"3" ==  3   // true
Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12.


*/
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
testEqual(12);

/*

Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3   // true
3 === '3'  // false
In the second example, 3 is a Number type and '3' is a String type.

Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

*/

// Setup
function testStrict(val) {
  if (val === 7 ) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);


/*

 Practice comparing different values
In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===).
 Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, 
and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is,
 without converting one type to the other.

Examples

3 == '3'  // returns true because JavaScript performs type conversion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed
Note
In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3   // returns 'number'
typeof '3' // returns 'string'
The compareEquality function in the editor compares two values using the equality operator. 
Modify the function so that it returns "Equal" only when the values are strictly equal.


*/

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
compareEquality("20", 20 );



/*

Comparison with the Inequality Operator
The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2     // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false
Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99



*/

// Setup
function testNotEqual(val) {
  if (val!= 99 ) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
testNotEqual(99);
testNotEqual("99");
testNotEqual("bob");


/*

Comparison with the Strict Inequality Operator
The strict inequality operator (!==) is the logical opposite of the strict equality operator. 
It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. 
Strict inequality will not convert data types.

Examples

3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true
Add the strict inequality operator to the if statement 
so the function will return "Not Equal" when val is not strictly equal to 17


*/


// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
testStrictNotEqual("17");
testStrictNotEqual(12);
testStrictNotEqual("bob");


/*

Comparison with the Greater Than Operator
The greater than operator (>) compares the values of two numbers. 
If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, greater than operator will convert data types of values while comparing.

Examples

5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false
Add the greater than operator to the indicated lines so that the return statements make sense.

*/
function testGreaterThan(val) {
  if (val > 100 ) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(0);
testGreaterThan(10);
testGreaterThan(11);
testGreaterThan(99);
testGreaterThan(100);
testGreaterThan(101);
testGreaterThan(150);


/*
 Comparison with the Greater Than Or Equal To Operator
The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, greater than or equal to operator will convert data types while comparing.

Examples

6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false
Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

*/
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val>= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(0);
testGreaterOrEqual(8);
testGreaterOrEqual(10);
testGreaterOrEqual(11);
testGreaterOrEqual(21);


/*

Comparison with the Less Than Operator
The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.

Examples

2   < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false
Add the less than operator to the indicated lines so that the return statements make sense.

*/

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55 ) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
testLessThan(15);
testLessThan(26);
testLessThan(56);

/*
 Comparison with the Less Than Or Equal To Operator
The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, less than or equal to converts data types.

Examples

4   <= 5  // true
'7' <= 7  // true
5   <= 5  // true
3   <= 2  // false
'8' <= 4  // false
Add the less than or equal to operator to the indicated lines so that the return statements make sense.


*/
function testLessOrEqual(val) {
  if (val<= 12 ) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
testLessOrEqual(11);
testLessOrEqual(13);
testLessOrEqual(25);


/*
Comparisons with the Logical And Operator
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true 
if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
will only return "Yes" if num is greater than 5 and less than 10. The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
Replace the two if statements with one statement, using the && operator, which will return "Yes" 
if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".



*/
function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
     
      return "Yes";
    
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(0);
testLogicalAnd(24);
testLogicalAnd(25);
testLogicalAnd(30);
testLogicalAnd(50);
testLogicalAnd(51);
testLogicalAnd(75);
testLogicalAnd(80);



/*
Comparisons with the Logical Or Operator
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be 
found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
Combine the two if statements into one statement which returns "Outside" if val is not 
between 10 and 20, inclusive. Otherwise, return "Inside".

Answer


testLogicalOr(0) should return "Outside"

Passed
testLogicalOr(9) should return "Outside"

Passed
testLogicalOr(10) should return "Inside"

Passed
testLogicalOr(15) should return "Inside"

Passed
testLogicalOr(19) should return "Inside"

Passed
testLogicalOr(20) should return "Inside"

Passed
testLogicalOr(21) should return "Outside"

Passed
testLogicalOr(25) should return "Outside"

*/


function testLogicalOr(val) {
  // Only change code below this line

  if (val >20 || val < 10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(0);
testLogicalOr(9);
testLogicalOr(10);
testLogicalOr(15);
testLogicalOr(19);
testLogicalOr(20);
testLogicalOr(21);
testLogicalOr(25);


/*

Introducing Else Statements
When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
Combine the if statements into a single if/else statement.


*/

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);


/*

Introducing Else If Statements
If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
Convert the logic to use else if statements.


*/

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } 
  else {  return "Between 5 and 10";
 }

}

testElseIf(7);

/*


Logical Order in If Else Statements
Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.

Here's the first:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
And the second just switches the order of the statements:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
While these two functions look nearly identical if we pass a number to both we get different outputs.

foo(0) // "Less than one"
bar(0) // "Less than two"
Change the order of logic in the function so that it will return the correct statements in all cases.


*/


function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);



/*
Chaining If Else Statements
if/else statements can be chained together for complex logic. 
Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"

***result

You should have at least four else statements

Passed
You should have at least four if statements

Passed
You should have at least one return statement

Passed
testSize(0) should return "Tiny"

Passed
testSize(4) should return "Tiny"

Passed
testSize(5) should return "Small"

Passed
testSize(8) should return "Small"

Passed
testSize(10) should return "Medium"

Passed
testSize(14) should return "Medium"

Passed
testSize(15) should return "Large"

Passed
testSize(17) should return "Large"

Passed
testSize(20) should return "Huge"

Passed
testSize(25) should return "Huge"


*/

function testSize(num) {
  // Only change code below this line
if (num < 5) {
  return "Tiny"
} else if (num < 10) {
  return "Small"
} else if (num < 15) {
  return "Medium"
} else if (num < 20) {
  return "Large"}
  else if (num >= 20) {
  return "Huge"
}
else
  return "Change Me";
  // Only change code above this line
}

testSize(7);



/*

Golf Code
In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to 
make in order to sink the ball in a hole to complete the play. 
Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string 
according to this table which lists the strokes in order of priority; top (highest) 
to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. 
We have added an array of all the names for your convenience.

*/
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
  // Only change code above this line
}

golfScore(5, 4);


/*
Results

golfScore(4, 1) should return "Hole-in-one!"

Passed
golfScore(4, 2) should return "Eagle"

Passed
golfScore(5, 2) should return "Eagle"

Passed
golfScore(4, 3) should return "Birdie"

Passed
golfScore(4, 4) should return "Par"

Passed
golfScore(1, 1) should return "Hole-in-one!"

Passed
golfScore(5, 5) should return "Par"

Passed
golfScore(4, 5) should return "Bogey"

Passed
golfScore(4, 6) should return "Double Bogey"

Passed
golfScore(4, 7) should return "Go Home!"

Passed
golfScore(5, 9) should return "Go Home!"


*/









