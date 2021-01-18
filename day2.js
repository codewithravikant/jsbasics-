/*Basic JavaScript: Add Two Numbers with JavaScript
Number is a data type in JavaScript which represents numeric data.

Now let's try to add two numbers using JavaScript.

JavaScript uses the + symbol as an addition operator when placed between two numbers.

Example:

myVar = 5 + 10; // assigned 15
*/

var sum = 10 + 0;
var sum = 10 + 10;
/*
We can also subtract one number from another.

JavaScript uses the - symbol for subtraction.

Example

myVar = 12 - 6; // assigned 6
Change the 0 so the difference is 12.


*/

var difference = 45 - 33;
/*
We can also multiply one number by another.

JavaScript uses the * symbol for multiplication of two numbers.

Example

myVar = 13 * 13; // assigned 169
Change the 0 so that product will equal 80.

*/
var product = 8 * 10;
/*
We can also divide one number by another.

JavaScript uses the / symbol for division.

Example

myVar = 16 / 2; // assigned 8
Change the 0 so that the quotient is equal to 2.

*/
var quotient = 66 /33;

/*
You can easily increment or add one to a variable with the ++ operator.

i++;

is the equivalent of

i = i + 1;

Note
The entire line becomes i++;, eliminating the need for the equal sign.

Change the code to use the ++ operator on myVar.
*/
var myVar = 87;
// Only change code below this line
myVar++;


/*
You can easily decrement or decrease a variable by one with the -- operator.

i--;

is the equivalent of

i = i - 1;

Note
The entire line becomes i--;, eliminating the need for the equal sign.

Change the code to use the -- operator on myVar.

*/

var myVar = 11;

// Only change code below this line
myVar--;

/*
We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.

Note
Not all real numbers can accurately be represented in floating point. This can lead to rounding errors. Details Here.

Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).


*/
var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 6.7;

/*
In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.

Let's multiply two decimals together to get their product.

Change the 0.0 so that product will equal 5.0.

*/
var product = 2.0 * 0.0;
var product = 2.0 * 2.5;


/*
Now let's divide one decimal by another.

Change the 0.0 so that quotient will equal to 2.2.


*/
var quotient = 4.4 / 2.0; // Change this line


/*


The remainder operator % gives the remainder of the division of two numbers.

Example

5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
Usage
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
Note
The remainder operator is sometimes incorrectly referred to as the "modulus" operator. It is very similar to modulus,
 but does not work properly with negative numbers.

Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.


*/
var remainder = 11 % 3;

/*In programming, it is common to use assignments to modify the contents of a variable. 
Remember that everything to the right of the equals sign is evaluated first, so we can say:

myVar = myVar + 5;

to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator.

var myVar = 1;
myVar += 5;
console.log(myVar); // Returns 6
Convert the assignments for a, b, and c to use the += operator.

*/

var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9;
c +=7;


/*

Like the += operator, -= subtracts a number from a variable.

myVar = myVar - 5;

will subtract 5 from myVar. This can be rewritten as:

myVar -= 5;

Convert the assignments for a, b, and c to use the -= operator.


*/
var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -=15;
c -=1;



/*
The *= operator multiplies a variable by a number.

myVar = myVar * 5;

will multiply myVar by 5. This can be rewritten as:

myVar *= 5;

Convert the assignments for a, b, and c to use the *= operator.



*/

var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;


/*
The /= operator divides a variable by another number.

myVar = myVar / 5;

Will divide myVar by 5. This can be rewritten as:

myVar /= 5;

Convert the assignments for a, b, and c to use the /= operator.

*/

var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;



/*
Previously we have used the code

var myName = "your name";

"your name" is called a string literal. It is a string because it is a series of zero or more characters enclosed in single or double quotes.

Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.

*/

var myFirstName = "Rrrrrr"
var myLastName = "Ppppp"

/*

When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' 
inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

var sampleStr = "Alan said, \"Peter is learning JavaScript\".";

This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. 
So if you were to print this to the console, you would get:

Alan said, "Peter is learning JavaScript".

Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

I am a "double quoted" string inside "double quotes".


*/
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line


/*


String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. 
Unlike some other programming languages, single and double quotes work the same in JavaScript.

doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';
The reason why you might want to use one type of quote over the other is if you want to use both in a string.
 This might happen if you want to save a conversation in a string and have the conversation in quotes.
 Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.

conversation = 'Finn exclaims to Jake, "Algebraic!"';
However, this becomes a problem if you need to use the outermost quotes within it. 
Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle,

 the string will stop early and throw an error.

goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
badStr = 'Finn responds, "Let's go!"'; // Throws an error
In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character. Note
The backslash \ should not be confused with the forward slash /. They do not do the same thing.

Change the provided string to a string with single quotes at the beginning and end and no escape characters.

Right now, the <a> tag in the string uses double quotes everywhere. 
You will need to change the outer quotes to single quotes so you can remove the escape characters.



*/

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/*
Strings
Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.
We learned this in the previous challenge.
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
Note that the backslash itself must be escaped in order to display as a backslash.

Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, 
with no spaces between escape sequences or words.

Here is the text with the escape sequences written out.

FirstLinenewlinetabbackslashSecondLinenewlineThirdLine



*/


var myStr ="FirstLine\n\t\\SecondLine\nThirdLine";


/* In JavaScript, when the + operator is used with a String value, it is called the concatenation operator.
 You can build a new string out of other strings by concatenating them together.

Example

'My name is Alan,' + ' I concatenate.'
Note
Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

var ourStr = "I come first. " + "I come second.";
// ourStr is "I come first. I come second."
Build myStr from the strings "This is the start. " and "This is the end." using the + operator.*/

var myStr = "This is the start. " + "This is the end."; 

/*

We can also use the += operator to concatenate a string onto the end of an existing string variable. 
This can be very helpful to break a long string over several lines.

Note
Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

var ourStr = "I come first. ";
ourStr += "I come second.";
// ourStr is now "I come first. I come second."
Build myStr over several lines by concatenating these two strings: "This is the first sentence. " and "This is the second sentence." 
using the += operator. Use the += operator similar to how it is shown in the editor. 
Start by assigning the first string to myStr, then add on the second string.
*/
// Only change code below this line

var myStr= "This is the first sentence. ";
myStr += "This is the second sentece."

/*

Sometimes you will need to build a string, Mad Libs style. By using the concatenation operator (+), 
you can insert one or more variables into a string you're building.

Example:

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
// ourStr is now "Hello, our name is freeCodeCamp, how are you?"
Set myName to a string equal to your name and build myStr with myName between the strings "My name is " and " and I am well!"


*/

// Only change code below this line
var myName = "freeCodeCamp";
var myStr = "My name is "+ myName +" and I am well!";


/*

Just as we can build a string over multiple lines out of string literals, 
we can also append variables to a string using the plus equals (+=) operator.

Example:

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// ourStr is now "freeCodeCamp is awesome!"
Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.


*/

// Change code below this line

var someAdjective = "nice!";
var myStr = "Learning to code is ";
myStr += someAdjective

/*
You can find the length of a String value by writing .length after the string variable or string literal.

"Alan Peter".length; // 10

For example, if we created a variable var firstName = "Charles", 
we could find out how long the string "Charles" is by using the firstName.length property.

Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.

*/
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;



/*
Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. 
They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word "Charles" is "C". So if var firstName = "Charles", 
you can get the value of the first letter of the string by using firstName[0].

Example:

var firstName = "Charles";
var firstLetter = firstName[0]; // firstLetter is "C"
Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.

Hint: Try looking at the example above if you get stuck.

*/
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line



/*
In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:

var myStr = "Bob";
myStr[0] = "J";
cannot change the value of myStr to "Job", because the contents of myStr cannot be altered.
 Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed.
  The only way to change myStr would be to assign it with a new string, like this:

var myStr = "Bob";
myStr = "Job";
Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.


*/

// Setup
var myStr = "Jello World";

// Only change code below this line

// Only change code above this line
myStr = "Hello World";


/*
You can also use bracket notation to get the character at other positions within a string.

Remember that computers start counting at 0, so the first character is actually the zeroth character.

Example:

var firstName = "Ada";
var secondLetterOfFirstName = firstName[1]; // secondLetterOfFirstName is "d"
Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

Hint: Try looking at the example above if you get stuck.

*/

// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line


/*
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if var firstName = "Charles", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

Example:

var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1]; // lastLetter is "s"
Use bracket notation to find the last character in the lastName variable.

Hint: Try looking at the example above if you get stuck.

*/
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length -1]; // Change this line



/*

You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the var firstName = "Charles" string by using firstName[firstName.length - 3]

Example:

var firstName = "Charles";
var thirdToLastLetter = firstName[firstName.length - 3]; // thirdToLastLetter is "l"
Use bracket notation to find the second-to-last character in the lastName string.

Hint: Try looking at the example above if you get stuck.

*/

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line


/*

We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". 
You will create an (optionally humorous) "Fill in the Blanks" style sentence.

In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. 
You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence - "It was really ____, and we ____ ourselves ____". 
This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. 
We can then assign the completed sentence to a variable as follows:

var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. 
You need to form a complete sentence using words of your choice, along with the words we provide.

You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, 
myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. 
ou should not change the words assigned to the variables.

You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. 
The result should be a complete sentence.


var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; 
*/
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "The " + myAdjective + " "+ myNoun + " " + myVerb + " " + myAdverb +"."; // Change this line
// Only change code above this line

/*

With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

var sandwich = ["peanut butter", "jelly", "bread"].

Modify the new array myArray so that it contains both a string and a number (in that order).

Hint
Refer to the example code in the text editor if you get stuck.

*/
// Only change code below this line
var myArray = ["apple",9, "butter"];


/*

You can also nest arrays within other arrays, like below:

[["Bulls", 23], ["White Sox", 45]]
This is also called a multi-dimensional array.

Create a nested array called myArray.


*/

// Only change code below this line
var myArray = [["Rkk",25], ["Sleep",9 ] ];

/*

We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.



Example

var array = [50,60,70];
array[0]; // equals 50
var data = array[1];  // equals 60
Note
There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

Create a variable called myData and set it to equal the first value of myArray using bracket notation.


*/


// Setup
var myArray = [50,60,70];
var myData = myArray[0]
// Only change code below this line


/*

Unlike strings, the entries of arrays are mutable and can be changed freely.

Example

var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
Note
There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

Modify the data stored at index 0 of myArray to a value of 45.

*/

// Setup
var myArray = [18,64,99];
myArray[0] = 45
// Only change code below this line

/*

One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array,
 the first set of brackets refers to the entries in the outer-most (the first level) array, 
 and each additional pair of brackets refers to the next level of entries inside.

Example

var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
Note
There shouldn't be any spaces between the array name and the square brackets, 
like array [0][0] and even this array [0] [0] is not allowed. Although JavaScript is able to process this correctly, 
this may confuse other programmers reading your code.

Using bracket notation select an element from myArray such that myData is equal to 8.

*/

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[2][1];



/*

*/
/*

*/
/*

*/
/*

*/
/*

*/





