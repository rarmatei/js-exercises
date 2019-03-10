/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/

var ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

function isInUK(country) {
  return ukNations.includes(country); // complete this statement
}

/* 
  PLEASE IGNORE LINES BELOW
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
//console.log(isInUk("France"));
//console.log(isInUk("Republic of Ireland"));
//console.log(isInUk("England"));
console.log(isInUK("France"));
console.log(isInUK("Republic of Irland"));
console.log(isInUK("England"));

// module.exports = {
//   ukNations,
//   isInUk
// };

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
*/
