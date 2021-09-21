/*
Explore Differences Between the var and let Keywords
One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.

var camper = 'James';
var camper = 'David';
console.log(camper);
Here the console will display the string David.

As you can see in the code above, the camper variable is originally declared as James and then overridden to be David. In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.
A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. If you were to replace var with let in the variable declarations of the code above, the result would be an error.

let camper = 'James';
let camper = 'David';
This error can be seen in the console of your browser. So unlike var, when using let, a variable with the same name can only be declared once. Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

"use strict";
x = 3.14;
This will display an error that x is not defined.

Update the code so it only uses the let keyword.
*/

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

/*
Compare Scopes of the var and let Keywords
When you declare a variable with the var keyword, it is declared globally, or 
locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. When you declare
a variable with the let keyword inside a block, statement, or expression, its scope 
is limited to that block, statement, or expression.

For example:

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
Here the console will display the values [0, 1, 2] and 3.

With the var keyword, i is declared globally. So when i++ is executed, 
it updates the global variable. This code is similar to the following:

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
Here the console will display the values [0, 1, 2] and 3.

This behavior will cause problems if you were to create a function and store it for
 later use inside a for loop that uses the i variable. This is because the stored function 
 will always refer to the value of the updated global i variable.

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
Here the console will display the value 3.

As you can see, printNumTwo() prints 3 and not 2. This is because the value 
assigned to i was updated and the printNumTwo() returns the global i and not the 
value i had when the function was created in the for loop. The let keyword does not follow this behavior:

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
Here the console will display the value 2, and an error that i is not defined.

i is not defined because it was not declared in the global scope. It is only declared
 within the for loop statement. printNumTwo() returned the correct value because three 
 different i variables with unique values (0, 1, and 2) were created by the let keyword
  within the loop statement.

Fix the code so that i declared in the if statement is a separate variable than i 
declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var and let keywords
 assign scope to the declared variable. When programming a function similar to the one 
 used in this exercise, it is often better to use different variable names to avoid confusion.

Code Explanation
By using let you can declare variables in relation to their scope.

Relevant Links
“let” - MDN Javascript reference 195
Rauschmayer, Axel. “Variables and scoping in ECMAScript 6”. 2ality.com, 2015-02-07. 54 Accessed 11 Dec 2018.
Bos, Wes. “Quick Tip: Use let with for Loops in JavaScript”. wesbos.com, 16 Aug 2016. 45 Accessed 11 Dec 2018.
*/
function checkScope() {
    "use strict";
    let i = 'function scope';
    if (true) {
     let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

/*
Declare a Read-Only Variable with the const Keyword
The keyword let is not the only new way to declare variables. In ES6,
 you can also declare variables using the const keyword.

const has all the awesome features that let has, with the added bonus that variables 
declared using const are read-only. They are a constant value, which means that once a 
variable is assigned with const, it cannot be reassigned.

const FAV_PET = "Cats";
FAV_PET = "Dogs";
The console will display an error due to reassigning the value of FAV_PET.

As you can see, trying to reassign a variable declared with const will throw an error. 
You should always name variables you don't want to reassign using the const keyword. This
 helps when you accidentally attempt to reassign a variable that is meant to stay constant.
  A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

Note: It is common for developers to use uppercase variable identifiers for immutable values 
and lowercase or camelCase for mutable values (objects and arrays). In a later challenge you
 will see an example of a lowercase variable identifier being used for an array.

Change the code so that all variables are declared using let or const. Use let when you want the 
variable to change, and const when you want the variable to remain constant. Also, rename 
variables declared with const to conform to common practices, meaning constants should be in all caps.

*/
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
      console.log(SENTENCE);
    }
  }
  printManyTimes("freeCodeCamp");

/*
Mutate an Array Declared with const
The const declaration has many use cases in modern JavaScript.

Some developers prefer to assign all their variables using const by default, unless they 
know they will need to reassign the value. Only in that case, they use let.

However, it is important to understand that objects (including arrays and functions) assigned to a variable
 using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
s = [1, 2, 3] will result in an error. The console.log will display the value [5, 6, 45].

As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to 
the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const 

was used, you cannot use the variable identifier s to point to a different array using the assignment operator.

An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.


*/
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
"use strict";
  // Using s = [2, 5, 7] would be invalid
s[0] = 2;
s[1] = 5;
s[2] = 7;
  // Only change code above this line
}
editInPlace();

/*
Prevent Object Mutation
As seen in the previous challenge, const declaration alone doesn't really protect your data 
from mutation. To ensure your data doesn't change, 
JavaScript provides a function Object.freeze to prevent data mutation.

Once the object is frozen, you can no longer add, update, or delete properties from it. 
Any attempt at changing the object will be rejected without an error.

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
The obj.review and obj.newProp assignments will result in errors, and the
 console will display the value { name: "FreeCodeCamp", review: "Awesome" }.

In this challenge you are going to use Object.freeze to prevent mathematical
 constants from changing. You need to freeze the MATH_CONSTANTS object so that no 
 one is able to alter the value of PI, add, or delete properties.
Code Explanation
By using Object.freeze() on MATH_CONSTANTS we can avoid manipulating it.
Relevant Links
“Object.freeze()” - MDN Javascript reference 293
*/
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
     Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

/*
Use Arrow Functions to Write Concise Anonymous Functions
In JavaScript, we often don't need to name our functions, especially when passing a 
function as an argument to another
 function. Instead, we create inline functions. We don't need to name these functions because 
 we do not reuse them anywhere else.

To achieve this, we often use the following syntax:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}
ES6 provides us with the syntactic sugar to not have to write anonymous functions this way.
 Instead, you can use arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}
When there is no function body, and only a return value, arrow function syntax allows you 
to omit the keyword return as well as the brackets surrounding the code. This helps simplify 
smaller functions into one-line statements:

const myFunc = () => "value";
This code will still return the string value by default.

Rewrite the function assigned to the variable magic which returns a new Date() to use arrow 
function syntax. Also, make sure nothing is defined using the keyword var.

*/
const magic = () => {
  return new Date();
};

/*
Write Arrow Functions with Parameters
Just like a regular function, you can pass arguments into an arrow function.

const doubler = (item) => item * 2;
doubler(4);
doubler(4) would return the value 8.

If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const doubler = item => item * 2;
It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
multiplier(4, 2) would return the value 8.

Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.


*/
const myConcat = (arr1, arr2) =>{
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
/*
Set Default Parameters for Your Functions
In order to help us create more flexible functions, ES6 introduces default parameters
 for functions.

Check out this code:

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
The console will display the strings Hello John and Hello Anonymous.

The default parameter kicks in when the argument is not specified (it is undefined).
 As you can see in the example above, the parameter name will receive its default value 
 Anonymous when you do not provide a value for the parameter. You can add default values 
 for as many parameters as you want.

Modify the function increment by adding default parameters so that it will add 1 to
 number if value is not specified.

*/
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

/*

*/