/* So in variable-02.js we learnt that we can use var, let and const to declare a variable in JS
 */

// Scope:

/* var: Function scope(Limited to the function where it is declared)*/

function varScope() {
  var age = 24;
}

console.log(age); // error: "age is not defined"
// as variable age is declared inside a function

// It will ignore the block scope:

{
  var lastname = "Walker";
}

console.log(lastname); // output: Walker

/* let: Block scope(Limited to the block where it is declared) */

{
  let name = "cyber-dev";
}

console.log(name); // error: "name is not defined"

/* const: Block scope(Limited to the block where it is declared)
It is similar to let */

{
  const name = "cyber-dev";
}

console.log(name); // error: "name is not defined"
