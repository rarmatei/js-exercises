// Write a function that replaces an element in an array
// The function must:
// - NOT change the original array
// - return a new array with the replacement value inserted
// - insert the replacement value at the provided index

function replace(arr, index, value) {
  arr.splice(index, 1, value);
  return arr; //complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = replace(
  numbers,
  1,
  2
); /* i made a change here arr to numbers */
var newNames = replace(
  names,
  2,
  "Rares"
); /*i made a change here arr to names */

console.log(numbers);
console.log(newNumbers);
console.log(names);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 3, 3]  this line is appearing after change
  [1, 2, 3]
  [Irina, Ashleigh, Mozafar]this line is appearing after change
  [Irina, Ashleigh, Rares] 
  my results!!!
  [ 1, 2, 3 ]
[ 1, 2, 3 ]
[ 'Irina', 'Ashleigh', 'Rares' ]
[ 'Irina', 'Ashleigh', 'Rares' ]

*/
