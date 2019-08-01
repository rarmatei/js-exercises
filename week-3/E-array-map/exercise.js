/*
  Using the .map() method, return a new array with `numbers` multiplied by 100
  Write multiple solutions using different syntax (as shown in the README)
*/

// Complete this function -->


function multiplyBy100(numbers) {
  return numbers.map(number=> number*100);
}


// DEBUG
// Debug your function by
// - calling it with some sample input
// - logging the output to the console

module.exports = { multiplyBy100 };

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var numbersBy100 = multiplyBy100(numbers);

console.log (numbersBy100);
