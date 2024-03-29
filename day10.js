/*
Iterate Odd Numbers With a For Loop
For loops don't have to iterate one at a time. 
By changing our final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll 
increment i by 2 each loop with i += 2.

var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
ourArray will now contain [0,2,4,6,8]. Let's chang
 our initialization so we can count by odd numbers.

Push the odd numbers from 1 through 9 to myArray using a for loop.

*/
// Setup
var myArray = [];

// Only change code below this line
var myArray = [];
for (var i = 1; i <10; i += 2) {
  myArray.push(i);
}
/*
Count Backwards With a For Loop
A for loop can also count backwards, so long as
 we can define the right conditions.

In order to decrement by two each iteration,
 we'll need to change our initialization, condition, 
 and final expression.

We'll start at i = 10 and loop while i > 0. We'll 
decrement i by 2 each loop with i -= 2.

var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
ourArray will now contain [10,8,6,4,2]. Let's change
 our initialization and final expression so we can count 
 backwards by twos to create an array of descending odd numbers.

Push the odd numbers from 9 through 1 to myArray using a for loop.
*/
// Setup
var myArray = [];

// Only change code below this line
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
/*
Iterate Through an Array with a For Loop
A common task in JavaScript is to iterate through
 the contents of an array. One way to do that is with a for loop.
  This code will output each element of the array arr to the console:

var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
Remember that arrays have zero-based indexing, 
which means the last index of the array is length - 1. 
Our condition for this loop is i < arr.length, 
which stops the loop when i is equal to length.
 In this case the last iteration is i === 4 i.e. 
 when i becomes equal to arr.length - 1 and outputs 6 to the
  console. Then i increases to 5, and the loop terminates 
  because i < arr.length is false.

Declare and initialize a variable total to 0. Use a for loop to a
dd the value of each element of the myArr array to total.
*/
// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
total += (myArr[i]);
}

/*
Nesting For Loops
If you have a multi-dimensional array, you can use the same logic as the prior 
waypoint to loop through both the array and any sub-arrays. Here is an example:

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
This outputs each sub-element in arr one at a time. Note that for the inner loop,
 we are checking the.
length of arr[i], since arr[i] is itself an array.

Modify function multiplyAll so that it returns the product of all the numbers in 
the sub-arrays of arr.

*/

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    product = product * arr [i][j];
    }
  }  
  // Only change code above this line
  return product;
  }

multiplyAll([[1,2],[3,4],[5,6,7]]);

/*
Iterate with JavaScript Do...While Loops
The next type of loop you will learn is called a do...while loop. It is called a do...while loop 
because it will first do one pass of the code inside the loop no matter what, and then continue to run 
the loop while the specified condition evaluates to true.

var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
The example above behaves similar to other types of loops, and the r
esulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while 
different from other loops is how it behaves when the condition fails on the first check. 
Let's see this in action: Here is a regular while loop that will run the code in the loop as long as i < 5:

var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
In this example, we initialize the value of ourArray to an empty array and the value of i to 5. When we
 execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute
  the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still 
  look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:

var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, 
there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single 
element to the array and then increment i before we get to the condition check. When we finally evaluate the
 condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop 
 and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures 
 that the code inside the loop will run at least once. Let's try getting
  a do...while loop to work by pushing values to an array.

Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, 
and i will be equal to 11 when your code has finished running.

*/

// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 11);

/*
Replace Loops using Recursion
Recursion is the concept that a function can be expressed in terms of itself. To help understand
 this, start by thinking about the following task: multiply the first n elements of an array to create
  the product of those elements. Using a for loop, you could do this:

  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite
 multiply in terms of itself and never need to use a loop.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1.
 For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way,
 calling multiply again until n <= 0. At this point, all the functions can return and the original multiply 
 returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again 
(in this example, when n <= 0), otherwise they can never finish executing.

Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.


*/
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  // Only change code above this line
}

/*
Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments 
has been pre-written for you.

The function should check if name is an actual contact's firstName and the
 given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name 
then return the string No such property.

*/
// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
// Only change code below this line
for (let x = 0; x < contacts.length; x++) {
  if (contacts[x].firstName === name) {
    if (contacts[x].hasOwnProperty(prop)) {
      return contacts[x][prop];
    } else {
      return "No such property";
    }
  }
}
return "No such contact";
// Only change code above this line
}

lookUpProfile("Akira", "likes");

/*
Generate Random Fractions with JavaScript
Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random decimal
 number between 0 (inclusive) and 1 (exclusive). Thus Math.random() 
 can return a 0 but never return a 1.

Note: Like Storing Values with the Assignment Operator, all 
function calls will 
be resolved before the return executes, so we can return the
 value of the Math.random() function.

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
