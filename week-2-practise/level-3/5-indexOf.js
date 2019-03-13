// Write a function that replaces an element in an array
// The function must:
// - get the index of the first item matching `valueToReplace`
// - insert `newValue` at that index
// - NOT change the original array
// - return a new array with the replacement value inserted

function replace(arr, valueToReplace, newValue) {
   // complete this statement
  arr.splice(arr.indexOf(valueToReplace), 1, newValue);
  return arr;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = replace(numbers, 3, 2);
var newNames = replace(names, "Ashleigh", "Rares");
var newNumbers = replace(numbers, 3, 2);
var newNames = replace(names, "Ashleigh", "Rares");
console.log(numbers);
console.log(newNumbers);


/* 
  EXPECTED RESULT
  ---------------
  [1, 3, 3]
  [1, 2, 3]
  [Irina, Ashleigh, Mozafar]
  [Irina, Rares, Mozafar]
*/
