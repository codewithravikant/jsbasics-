/*
Basic JavaScript: Using Objects for Lookups
Objects can be thought of as a key/value storage, like a dictionary.
If you have tabular data, you can use an object to "lookup" values rather than a switch statement or
an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

*/

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup  = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  return lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");


/*

if(myObj.hasOwnProperty(checkProp)){
return myObj[checkProp];
}
else{
return “Not Found”;
}
}

*/

/*



*/


/*



*/




/*



*/




/*



*/

/*
Basic JavaScript: Using Objects for Lookups
Objects can be thought of as a key/value storage, like a dictionary.
If you have tabular data, you can use an object to "lookup" values rather than a switch statement or
an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

*/

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup  = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  return lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

/*
Testing Objects for Properties
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
The first hasOwnProperty returns true, while the second returns false.

Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".


*/


if(myObj.hasOwnProperty(checkProp)){
return myObj[checkProp];
}
else{
return “Not Found”;
}
}


