/*
  Using the .map() method, return a new array with `numbers` multiplied by 100
  Write multiple solutions using different syntax (as shown in the README)
*/

// Complete this function -->
function multiplyBy100(numbers) {
  return numbers * 100;
}

var number = [2, 4, 6, 8];
var multipliedNumbers = number.map(multiplyBy100);
console.log(multipliedNumbers);

// DEBUG
// Debug your function by
// - calling it with some sample input
// - logging the output to the console

module.exports = { multiplyBy100 };
