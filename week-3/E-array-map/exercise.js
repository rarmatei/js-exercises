/*
  Using the .map() method, return a new array with `numbers` multiplied by 100
  Write multiple solutions using different syntax (as shown in the README)
*/

// Complete this function -->

var numbers = [2, 3, 5, 6, 8];
var multiplyBy100 = numbers.map(number => {
  return number * 100;
});
var multiple = numbers.map(number => number * 100);
var numberMultiple = numbers.map(function multiply(number) {
  return number * 100;
});
console.log(multiplyBy100);
console.log(multiple);
console.log(numberMultiple);

// DEBUG
// Debug your function by
// - calling it with some sample input
// - logging the output to the console

module.exports = { multiplyBy100 };
