/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  var firstArrayElement = arr[0];
  return firstArrayElement; // complete this statement
}

function last(arr) {
  var lasArrayElement = arr[2];
  return lasArrayElement; // complete this statement
}

/* 
  PLEASE IGNORE LINES BELOW
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

console.log(first(numbers));
console.log(last(names));

module.exports = {
  first,
  last
};

/* 
  EXPECTED RESULT
  ---------------
  1
  Mozafar
*/
