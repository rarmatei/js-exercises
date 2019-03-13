/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitalise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1, 6);
}

/* 
  PLEASE IGNORE LINES BELOW
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

module.exports = {
  capitalise
};

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
