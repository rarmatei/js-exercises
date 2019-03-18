/*
  Using the .map() method, return a new array with `numbers` multiplied by 100
  Write multiple solutions using different syntax (as shown in the README)
*/

// Complete this function -->
var numbers = [2, 3, 4, 5, 6];
function multiplyBy100(number) {
  // this the only one works in my labtop.
  return number * 100;
}
var bigNumbers = numbers.map(multiplyBy100);
/*var bigNumbers = numbers.map(function multiplyBy100(number) {
return number * 100;
});
var bigNumbers = numbers.map(function(number) {
return number * 100;
});
var bigNumbers = numbers.map(number => {
return number * 100;
});
var numbers = [2, 3, 4, 5, 6];
var bigNumbers = numbers.map(number => number * 100); */

console.log(bigNumbers);

// DEBUG
// Debug your function by
// - calling it with some sample input
// - logging the output to the console

module.exports = { multiplyBy100 };
