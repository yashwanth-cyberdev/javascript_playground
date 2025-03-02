/* Primitive data types are data types that are immutable which means we cannot modify the value. 
When we assign an variable new value it doesn't modify the old one instead it will create a new copy in the stack */

// String

let name = "John Doe"; // Anything that is enclosed with quotes is called a string

// number

let age = 25;
const pi = 3.14;

// In number we have integer and decimal

// Boolean

let isActive = true;
let isloggedin = false;

// It has only two values true and false

// Undefined
let firstname;

// Variable that is declared but not assigned with any value is called undefined

// Null

let amount = null;

// It is like non existent value. Explicitly defining an empty value

// BigInt

// Used for very large number beyond number limits
let bigNum = 123456789012345678901234567890n; // The n at the end of the number represents bigInt

// Symbol

// Unique value mostly used for object properties

let value = Symbol("id");
console.log(value);
