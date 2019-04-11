/*
  Using the .map() method, return a new array with `numbers` multiplied by 100
  Write multiple solutions using different syntax (as shown in the README)
*/

// Complete this function -->

function multiplyBy100(numbers) {
  return numbers * 100;
} //Solution 1

Array1 = [2, 4, 6, 8, 10];

//var NumberMultiply =  Array1.map(multiplyBy100)

//var NumberMultiply = Array1.map(function multiplyBy100(numbers) {
//return numbers * 100 });  //Solution 2

var NumberMultiply = Array1.map(function(numbers) {
  return numbers * 100;
}); //Solution 3

console.log(NumberMultiply);
// DEBUG
// Debug your function by
// - calling it with some sample input
// - logging the output to the console

module.exports = { multiplyBy100 };
