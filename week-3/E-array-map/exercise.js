/*
  Using the .map() method, return a new array with `numbers` multiplied by 100
  Write multiple solutions using different syntax (as shown in the README)
*/

// Complete this function -->
function multiplyBy100(numbers) {
  return numbers.map(number => number * 100);
}
var numbers = [20, 50, 8, 3];
var result = multiplyBy100(numbers);
console.log(result);
// DEBUG
// Debug your function by
// - calling it with some sample input
// - logging the output to the console

module.exports = { multiplyBy100 };
