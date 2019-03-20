/*
  Using the .map() method, return a new array with `numbers` multiplied by 100
  Write multiple solutions using different syntax (as shown in the README)
*/

// Complete this function -->
function multiplyBy100(numbers) {
  return numbers.map(number => number * 100);
}
function multiplyBy100(numbers) {
  return numbers.map(function times100(number) {
    return number * 100;
  });
}
function multiplyBy100(numbers) {
  return numbers.map(function(number) {
    return number * 100;
  });
}
function multiplyBy100(numbers) {
  return numbers.map(number => {
    return number * 100;
  });
}

// DEBUG
// Debug your function by
// - calling it with some sample input
// - logging the output to the console

module.exports = { multiplyBy100 };
