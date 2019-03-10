import { numberLiteralTypeAnnotation, returnStatement } from "@babel/types";

// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement

function validate(num) {
  return isNumber(num) && isPositive(num) && isLessThanOrEqual(num);
}

function isNumber(number) {
  return typeof number === "number";
}

function isPositive(number) {
  // var psotiveNumer = number > 0;
  // return psotiveNumer ;
  return number >= 0;
}

function isLessThanOrEqual(number) {
  // var lessThanOrEqual = number <= 100;
  // return lessThanOrEqual;
  return number <= 100;
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(validate(10));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-12));
console.log(validate("16"));

/* 
  EXPECTED RESULT
  ---------------
  true
  true
  false
  false
  false
*/
