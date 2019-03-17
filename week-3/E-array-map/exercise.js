/*
  Using the .map() method, return a new array with `numbers` multiplied by 100
  Write multiple solutions using different syntax (as shown in the README)
*/

// Complete this function -->
function multiplyBy100(numbers) {
  return numbers * 100;
}

// DEBUG
// Debug your function by
// - calling it with some sample input
// - logging the output to the console

var numbs = [10, 20, 30];
var numbsDoubled = numbs.map(multiplyBy100);
console.log(numbsDoubled);
module.exports = { multiplyBy100 };
