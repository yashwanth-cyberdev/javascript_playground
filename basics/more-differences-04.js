/* So here we will learn more differences for var, let and const */

// Re-declaration:

// var: Allowed in the same scope

function getAge() {
  var age = 25;
  var age = 45; // Doesn't throw any error
  return age;
}

console.log(getAge()); // output: 45

// let: Not allowed in the same scope

function getLastName() {
  let lastname = "Doe";
  let lastname = "Jon"; //error: cannot Re-declare blocked scope variable
  return lastname;
}

// const: Not allowed in the same scope

function getLastName() {
  const lastname = "Doe";
  const lastname = "Jon"; //error: cannot Re-declare blocked scope variable
  return lastname;
}

/* ========================================================== */

// Re-assignment:

// var: It is allowed

var car = "Volvo";
car = "BMW";

console.log(car); // BMW

// let: It is allowed

let year = 2025;
year = 2026;

console.log(year); // 2026

// const: Not allowed(Value stays the same after assignment)

const pi = 3.14;
pi = 2.1; // error: cannot reassign to constant variable

/* ========================================================================= */

// Best use case:

// var: Avoid using, as it causes bugs

// let: Use for variables that may change

// const: Use for constants (values that don't change)
